<?php
namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PreflightController extends Controller
{

    /**
     * Create a User data
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function preflight(Request $request)
    {
        return response()->json();
    }
}
