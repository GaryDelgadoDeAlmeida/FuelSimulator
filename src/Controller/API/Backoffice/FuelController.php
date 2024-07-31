<?php

namespace App\Controller\API\Backoffice;

use App\Manager\FuelManager;
use App\Manager\SerializeManager;
use App\Repository\FuelRepository;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/api/backoffice', name: 'api_backoffice_')]
class FuelController extends AbstractController
{
    private Security $security;
    private FuelManager $fuelManager;
    private SerializeManager $serializeManager;
    private FuelRepository $fuelRepository;

    function __construct(
        Security $security, 
        FuelManager $fuelManager,
        SerializeManager $serializeManager,
        FuelRepository $fuelRepository
    ) {
        $this->security = $security;
        $this->fuelManager = $fuelManager;
        $this->serializeManager = $serializeManager;
        $this->fuelRepository = $fuelRepository;
    }

    #[Route('/fuel', name: 'post_fuel', methods: ["POST"])]
    public function post_fuel(Request $request): JsonResponse {
        $jsonContent = json_decode($request->getContent(), true);
        if(empty($jsonContent)) {
            return $this->json([
                "message" => "An error has been encountered with the sended body"
            ], Response::HTTP_PRECONDITION_FAILED);
        }

        try {
            $fields = $this->fuelManager-> checkFields($jsonContent);
            if(empty($fields)) {
                throw new \Exception("An error has been encountered with the sended body", Response::HTTP_PRECONDITION_FAILED);
            }

            $fuel = $this->fuelManager->fillFuel($fields);
            if(is_string($fuel)) {
                throw new \Exception($fuel);
            }

            $this->fuelRepository->save($fuel, true);
        } catch(\Exception $e) {
            $code = $e->getCode();

            return $this->json([
                "message" => $e->getMessage()
            ], $code !== 200 ? $code : Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return $this->json(
            $this->serializeManager->serializeContent($fuel), 
            Response::HTTP_CREATED
        );
    }

    #[Route('/fuel/{fuelID}/update', name: 'udpate_fuel', methods: ["UPDATE", "PUT"])]
    public function udpate_fuel(int $fuelID, Request $request) : JsonResponse {
        $jsonContent = json_decode($request->getContent(), true);
        if(empty($jsonContent)) {
            return $this->json([
                "message" => ""
            ], Response::HTTP_PRECONDITION_FAILED);
        }
        return $this->json([
            "message" => "Route under construction"
        ], Response::HTTP_OK);
    }

    #[Route('/fuel/{fuelID}/remove', name: 'remove_fuel', methods: ["DELETE"])]
    public function remove_fuel(int $fuelID) : JsonResponse {
        $fuel = $this->fuelRepository->find($fuelID);
        if(empty($fuel)) {
            return $this->json([
                "message" => "Fuel type not found"
            ], Response::HTTP_NOT_FOUND);
        }

        try {
            $this->fuelRepository->remove($fuel, true);
        } catch(\Exception $e) {
            $code = $e->getCode();

            return $this->json([
                "message" => $e->getMessage()
            ], $code !== 200 ? $code : Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return $this->json(null, Response::HTTP_NO_CONTENT);
    }
}
