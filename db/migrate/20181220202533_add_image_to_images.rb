class AddImageToImages < ActiveRecord::Migration[5.2]
  def up
    add_column :images, :image, :string
  end

  def down
    remove_column :images, :image
  end
end
