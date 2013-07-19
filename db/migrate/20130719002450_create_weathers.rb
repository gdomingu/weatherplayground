class CreateWeathers < ActiveRecord::Migration
  def change
    create_table :weathers do |t|
      t.float :time
      t.float :temperatureMin
      t.float :temperatureMax

      t.timestamps
    end
  end
end
