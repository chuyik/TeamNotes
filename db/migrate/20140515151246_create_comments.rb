class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.references :knowledge, index: true
      t.string :username
      t.text :content
      t.string :title

      t.timestamps
    end
  end
end
