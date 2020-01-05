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

    if (!Event::find($id)){
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




// 動詞	URI	アクション	ルート名
// GET	/photos	index	photos.index
// GET	/photos/create	create	photos.create
// POST	/photos	store	photos.store
// GET	/photos/{photo}	show	photos.show
// GET	/photos/{photo}/edit	edit	photos.edit
// PUT/PATCH	/photos/{photo}	update	photos.update
// DELETE	/photos/{photo}	destroy	photos.destroy