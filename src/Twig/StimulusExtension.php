<?php

namespace App\Twig;

use Twig\TwigFunction;
use Twig\Environment;
use Twig\Extension\AbstractExtension;

class StimulusExtension extends AbstractExtension
{
	
	public function getFunctions(): array
	{
        return [
            new TwigFunction('stimulus_value', [$this, 'renderStimulusValue'], ['needs_environment' => true, 'is_safe' => ['html_attr']]),
            new TwigFunction('stimulus_param', [$this, 'renderStimulusParam'], ['needs_environment' => true, 'is_safe' => ['html_attr']]),
        ];
	}

    /**
     * @param string|array $dataOrControllerName This can either be a map of controller names
     *                                           as keys set to their "targets". Or this can
     *                                           be a string controller name and targets are
     *                                           passed as the 2nd argument.
     * @param string|null  $values               array of values if a string is passed to the 1st argument
     *
     * @throws \Twig\Error\RuntimeError
     */
    public function renderStimulusValue(Environment $env, $dataOrControllerName, array $values = []): string
    {
        if (\is_string($dataOrControllerName)) {
            $data = [$dataOrControllerName => $values];
        } else {
            if ($values) {
                throw new \InvalidArgumentException('You cannot pass a string to the second argument while passing an array to the first argument of stimulus_value().');
            }

            $data = $dataOrControllerName;

            if (!$data) {
                return '';
            }
        }
        
        $values = [];

        foreach ($data as $controllerName => $controllerValues) {
            $controllerName = twig_escape_filter($env, $this->normalizeControllerName($controllerName), 'html_attr');
            
            foreach ($controllerValues as $key => $value) {
                if (null === $value) {
                    continue;
                }

                if (!is_scalar($value)) {
                    $value = json_encode($value);
                }

                if (\is_bool($value)) {
                    $value = $value ? 'true' : 'false';
                }

                $key = twig_escape_filter($env, $this->normalizeKeyName($key), 'html_attr');
                $value = twig_escape_filter($env, $value, 'html_attr');

                $values[] = 'data-'.$controllerName.'-'.$key.'-value="'.$value.'"';
            }
        }

		return implode(' ', $values);
    }

	/**
     * @param string|array $dataOrControllerName This can either be a map of controller names
     *                                           as keys set to their "targets". Or this can
     *                                           be a string controller name and targets are
     *                                           passed as the 2nd argument.
     * @param array        $params   		     array of params if a string is passed to the 1st argument
     *
     * @throws \Twig\Error\RuntimeError
     */
    public function renderStimulusParam(Environment $env, $dataOrControllerName, array $params = []): string
    {
        if (\is_string($dataOrControllerName)) {
            $data = [$dataOrControllerName => $params];
        } else {
            if ($params) {
                throw new \InvalidArgumentException('You cannot pass an array to the first and second argument of stimulus_param().');
            }

            $data = $dataOrControllerName;

            if (!$data) {
                return '';
            }
        }

        $values = [];
        
        foreach ($data as $controllerName => $controllerParams) {
            $controllerName = twig_escape_filter($env, $this->normalizeControllerName($controllerName), 'html_attr');

            foreach ($controllerParams as $key => $value) {
                if (null === $value) {
                    continue;
                }

                if (!is_scalar($value)) {
                    $value = json_encode($value);
                }

                if (\is_bool($value)) {
                    $value = $value ? 'true' : 'false';
                }

                $key = twig_escape_filter($env, $this->normalizeKeyName($key), 'html_attr');
                $value = twig_escape_filter($env, $value, 'html_attr');

                $values[] = 'data-'.$controllerName.'-'.$key.'-param="'.$value.'"';
            }
        }

		return implode(' ', $values);
    }

    /**
     * Normalize a Stimulus controller name into its HTML equivalent (no special character and / becomes --).
     *
     * @see https://stimulus.hotwired.dev/reference/controllers
     */
    private function normalizeControllerName(string $str): string
    {
        return preg_replace('/^@/', '', str_replace('_', '-', str_replace('/', '--', $str)));
    }

    /**
     * Normalize a Stimulus Value API key into its HTML equivalent ("kebab case").
     * Backport features from symfony/string.
     *
     * @see https://stimulus.hotwired.dev/reference/values
     */
    private function normalizeKeyName(string $str): string
    {
        // Adapted from ByteString::camel
        $str = ucfirst(str_replace(' ', '', ucwords(preg_replace('/[^a-zA-Z0-9\x7f-\xff]++/', ' ', $str))));

        // Adapted from ByteString::snake
        return strtolower(preg_replace(['/([A-Z]+)([A-Z][a-z])/', '/([a-z\d])([A-Z])/'], '\1-\2', $str));
    }
}

?>