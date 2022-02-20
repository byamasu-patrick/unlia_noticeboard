class Api::V1::CommentsController < ApplicationController
    before_action :set_comment, only: %i[show, update, destroy]

    def index
        comments = Comment.all.order(created_at: :ASC)
        render json: comments
    end

    def show
    end

    def update
    end

    def create
        dish = Dish.find(params[:dishId])
        @comment = dish.comments.build(author: params[:author], rating: params[:rating], comment: params[:comment])
        
        respond_to do |format|
            if @comment.save
                format.json { render json: @comment, status: :created }
            else
                format.json { render json: @comment.errors, status: :unprocessable_entity }
            end
        end
    end
    private
        def comment_params
            params.require().permit(:author, :rating, :comment)
        end
        def set_comment
        end
end