<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\PostStoreRequest;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        return Post::all();
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
     * @param PostStoreRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(PostStoreRequest $request): \Illuminate\Http\JsonResponse
    {
        try {
            $validated = $request->validated();
            $post = Post::create([
                'title' => $validated['title'],
                'body' => $validated['body'],
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Post created successfully',
                'data' => $post,
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to create post.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $post_id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($post_id): \Illuminate\Http\JsonResponse
    {
        $post = Post::find($post_id);

        if($post) {
            return response()->json([
                'success' => true,
                'message' => 'The post was found',
                'data' => $post,
            ], 201);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'The post not found',
            ], 500);
        }
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
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(PostStoreRequest $request, int $id): \Illuminate\Http\JsonResponse
    {
        try {
            $validated = $request->validated();
            $post = Post::find($id);
            $post->update([
                'title' => $validated['title'],
                'body' => $validated['body'],
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Post created successfully',
                'data' => $post->fresh(),
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to create post.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id): \Illuminate\Http\JsonResponse
    {
        try {
            Post::find($id)->delete();
            return response()->json(['message' => 'Post deleted successfully.'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
