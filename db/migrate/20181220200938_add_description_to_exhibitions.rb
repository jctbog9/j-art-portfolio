class AddDescriptionToExhibitions < ActiveRecord::Migration[5.2]
  def up
    add_column :exhibitions, :description, :string
  end

  def down
    remove_column :exhibitions, :description
  end
end
