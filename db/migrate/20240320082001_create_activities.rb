class CreateActivities < ActiveRecord::Migration[7.1]
  def change
    create_table :activities do |t|
      t.string :type
      t.decimal :distance
      t.integer :duration
      t.text :notes
      t.boolean :isFavorite
      t.date :date
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
