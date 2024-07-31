<?php

namespace App\Controller\API;

use App\Manager\SerializeManager;
use App\Repository\FuelRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/api', name: 'api_')]
class FuelController extends AbstractController
{
    private SerializeManager $serializeManager;
    private FuelRepository $fuelRepository;
    
    function __construct(SerializeManager $serializeManager, FuelRepository $fuelRepository) {
        $this->serializeManager = $serializeManager;
        $this->fuelRepository = $fuelRepository;
    }

    #[Route('/fuels', name: 'get_fuels', methods: ["GET"])]
    public function get_fuels(): JsonResponse {
        return $this->json([
            "results" => $this->serializeManager->serializeContent(
                $this->fuelRepository->findAll()
            )
        ], Response::HTTP_OK);
    }
}
