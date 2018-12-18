class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.string :name, null: false
      t.string :price, default: 'Currently not for sale'
      t.string :description, optional: true

      t.belongs_to :exhibition

      t.timestamps null: false
    end
  end
end
