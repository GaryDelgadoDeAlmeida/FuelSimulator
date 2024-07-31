<?php

namespace App\Enum;

abstract class UserEnum {

    public const USER_FIRSTNAME = "firstname";
    public const USER_LASTNAME = "lastname";
    public const USER_EMAIL = "email";
    public const USER_PASSWORD = "password";

    protected array $typeName = [
        self::USER_FIRSTNAME => "Firstname",
        self::USER_LASTNAME => "Lastname",
        self::USER_EMAIL => "Email",
        self::USER_PASSWORD => "Password"
    ];

    public static function getAvailableChoices(): array {
        return [
            self::USER_FIRSTNAME,
            self::USER_LASTNAME,
            self::USER_EMAIL,
            self::USER_PASSWORD
        ];
    }

    public static function getChoices(): array {
        $choices = [];

        foreach(self::getAvailableChoices() as $choice) {
            $choices[self::$typeName[$choice]] = $choice;
        }

        return $choices;
    }
}