<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Event;
use App\Http\Controllers\Controller;

class EventsController extends Controller
{
    public function index()
    {
        $events = Event::all()->take(10);
        return response()->json($events);
    }

    public function store(Request $request)
    {
        $event = new Event;

        $event->fill($request->all());

        if (!$event->save()) {
            return response()->json([
                'description' => 'failed'
            ], 401);
        }

        return response()->json([
            'message' => 'Successfully update event'
        ], 201);
    }

    public function update(Request $request, $id)
    {

        if (!Event::find($id)) {
            return response()->json([
                'message' => 'No target data'
            ], 401);
        };

        $event = Event::find($id);

        $event->fill($request->all());

        if (!$event->save()) {
            return response()->json([
                'description' => 'failed'
            ], 401);
        }

        return response()->json([
            'message' => 'Successfully update event'
        ], 201);
    }
}
