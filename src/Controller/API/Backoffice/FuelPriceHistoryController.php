<?php

namespace App\Controller\API\Backoffice;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class FuelPriceHistoryController extends AbstractController
{
    #[Route('/a/p/i/backoffice/fuel/price/history', name: 'app_a_p_i_backoffice_fuel_price_history')]
    public function index(): Response
    {
        return $this->render('api/backoffice/fuel_price_history/index.html.twig', [
            'controller_name' => 'FuelPriceHistoryController',
        ]);
    }
}
