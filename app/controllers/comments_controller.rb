class CommentsController < ApplicationController
  def create
  	@knowledge = Knowledge.find(params[:knowledge_id])
  	comments = Knowledge.find(params[:knowledge_id]).comments

    username = comment_params[:username].blank? ? (I18n.t 'visitor') : comment_params[:username]
    @cur_comment = Comment.new(comment_params.merge({username: username, order: (comments.size+ 1)}))
  	@cur_comment.knowledge = @knowledge

  	if @cur_comment.valid?
      @cur_comment.save
  	  @comment = Comment.new
  	  render "knowledges/show"
  	else
  	  render json: @cur_comment.errors.messages
  	end	
  end

  def destroy
    p params
    @comment = Comment.find(params[:id])
    @comment.status = "deleted"
    if @comment.save
      render json: @comment, status: :ok
    else
      render json: @comment, status: :unprocessable_entity
    end 
  end

  private
  	def comment_params
  		params.require(:comment).permit(:username, :title, :content)
  	end
end
