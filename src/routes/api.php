<?php

use Illuminate\Http\Request;

Route::group([
    'namespace' => 'API',
    'middleware' => ['api', 'cors']
], function () {
    Route::options('login', 'AuthController@preflight');
    Route::post('login', 'AuthController@login');

    Route::post('logout', 'AuthController@logout');

    Route::post('refresh', 'AuthController@refresh');

    Route::options('me', 'AuthController@preflight');
    Route::get('me', 'AuthController@me');

    Route::post('sign_up', 'AuthController@signUp');

    Route::options('login', 'AuthController@preflight');
    Route::post('login', 'AuthController@login');
});

Route::group([
    'namespace' => 'API',
    'middleware' => ['api', 'cors'],
    'prefix' => 'event',
], function () {
    Route::options('index', 'PreflightController@preflight');
    Route::get('index', 'EventsController@index');
});
