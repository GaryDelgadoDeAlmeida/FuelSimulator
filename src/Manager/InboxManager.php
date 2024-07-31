<?php

namespace App\Manager;

use App\Entity\Inbox;
use App\Enum\InboxEnum;

class InboxManager {

    /**
     * 
     */
    public function checkFields(array $jsonContent) {
        $fields = [];
        $allowedFields = InboxEnum::getAvailableChoices();

        foreach($jsonContent as $fieldName => $fieldValue) {
            // 
        }
        
        return $fields;
    }

    /**
     * 
     */
    public function fillContact(array $fields, ?Inbox $inbox = new Inbox()) {
        // 
    }
}