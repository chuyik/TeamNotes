module TimeUtil
  def normalize_time(time)
  	time.localtime.strftime("%Y-%m-%d %H:%M:%S")
  end

  def hours_passed(object)
    (Time.now.localtime - object.created_at) / 60 / 60
  end
end
