class CreateKnowledges < ActiveRecord::Migration
  def change
    create_table :knowledges do |t|
      t.string :title
      t.integer :order

      t.timestamps
    end
  end
end
