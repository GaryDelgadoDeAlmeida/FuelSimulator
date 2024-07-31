<?php

namespace App\Controller\API;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api', name: 'api_')]
class FuelPriceHistoryController extends AbstractController
{
    #[Route('/fuels/price-histories', name: 'get_fuels_price_histories', methods: ["GET"])]
    public function get_fuels_price_histories(): JsonResponse {
        return $this->json([
            "message" => "Route under construction"
        ], Response::HTTP_OK);
    }

    #[Route('/fuel/{fuelID}/price-histories', name: 'get_fuel_price_histories', methods: ["GET"])]
    public function get_fuel_price_histories(int $fuelID): JsonResponse {
        return $this->json([
            "message" => "Route under construction"
        ], Response::HTTP_OK);
    }
}
