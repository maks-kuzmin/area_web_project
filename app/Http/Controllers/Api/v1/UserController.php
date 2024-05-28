<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection
     */
    public function index(Request $request)
    {
        $collection = User::query();

        $allowedFilterFields = (new User())->getFillable();
        $allowedSortFields = array_merge(['id'], $allowedFilterFields);
        $allowedSortDirections = ['asc', 'desc'];

        // ?sortBy=name&sortDir=desc
        $sortBy = $request->query('sortBy', 'id');
        $sortDir = strtolower($request->query('sortDir', 'asc'));

        if(!in_array($sortBy, $allowedSortFields))  $sortBy = $allowedSortFields[0];
        if(!in_array($sortDir, $allowedSortDirections))  $sortDir = $allowedSortDirections[0];
        $collection->orderBy($sortBy, $sortDir);

        // ?_name=John&_firstname=John&_lastname=Black
        foreach ($allowedFilterFields as $key) {
            if($paramFilter = $request->query('_'.$key)) {
                $paramFilter = preg_replace('#([%_?+])#', '\\$1', $paramFilter);
                $collection->where($key, 'LIKE', '%'.$paramFilter.'%');
            }
        }
        // ?_limit=20
        $limit = intval($request->query('limit', 20));
        $limit = min($limit, 20);
        $collection->limit($limit);

        //?_offset=0
        $offset = intval($request->query('offset', 0));
        $offset = max($offset, 0);
        $collection->offset($offset);
        return $collection->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
