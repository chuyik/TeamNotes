class AddAuthorToKnowledge < ActiveRecord::Migration
  def change
    add_column :knowledges, :author, :string
  end
end
