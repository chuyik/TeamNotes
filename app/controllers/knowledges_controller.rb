class KnowledgesController < ApplicationController

  before_action :new_comment, only: [:index, :show]

  def new
    @knowledge = Knowledge.new
  end

  def index id=0
    @knowledges = Knowledge.all.reverse
  end

  def create
    @knowledge = Knowledge.new(knowledge_params)
    if @knowledge.save
      redirect_to root_url
    else
      render 'new'
    end
  end

  def show
    @knowledge = Knowledge.find(params[:id])
    respond_to do |format|
     format.html
     format.js
    end
  end

  def update
    @knowledge = Knowledge.find(params[:id])
    @knowledge.content = params[:knowledge][:content]

    @comment = Comment.new(params[:comment])

    Knowledge.transaction do
      @knowledge.save!
      @comment.knowledge = @knowledge
      @comment.save
    end
    render json: @knowledge
  end

  def destroy
    @knowledge = Knowledge.find(params[:id])

    if hours_passed(@knowledge) < 24
      if @knowledge.destroy
        flash[:success] = "The knowledge has been removed."
      else
        flash[:danger] = "error!"
      end
    else
      flash[:danger] = "You cannot delete it now."
    end
    redirect_to :root
  end

  def edit
  end

  private
    def knowledge_params
      params.require(:knowledge).permit(:author, :title, :content)
    end

    def new_comment
      @comment = Comment.new
    end
end
