class CreateExhibitions < ActiveRecord::Migration[5.2]
  def change
    create_table :exhibitions do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.string :date, null: false

      t.timestamps null: false
    end
  end
end
