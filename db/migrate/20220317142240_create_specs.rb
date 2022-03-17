class CreateSpecs < ActiveRecord::Migration[6.1]
  def change
    create_table :specs do |t|
      t.string :size
      t.integer :price
      t.integer :storage

      t.timestamps
    end
  end
end
