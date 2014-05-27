class AddContentToKnowledge < ActiveRecord::Migration
  def change
  	add_column :knowledges, :content, :text
  end
end
