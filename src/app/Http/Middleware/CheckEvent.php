<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;


class CheckEvent
{
    public function handle($request, Closure $next)
    {

      $request->validate([
        'name' => 'required',
        'start_time' => 'required',
        'end_time' => 'required',
        'place' => 'required'
      ]);

      return $next($request);
    }
}
