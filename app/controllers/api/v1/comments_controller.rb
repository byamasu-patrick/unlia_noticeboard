class Api::V1::CommentsController < ApplicationController
    def index
        comments = Comment.all.order(created_at: :ASC)

        render json: comments
    end
    def update
    end
    def create
    end
end