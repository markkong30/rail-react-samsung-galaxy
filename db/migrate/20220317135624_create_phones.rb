class CreatePhones < ActiveRecord::Migration[6.1]
  def change
    create_table :phones do |t|
      t.string :title
      t.string :color
      t.string :image

      t.timestamps
    end
  end
end
