class Comment < ActiveRecord::Base
  belongs_to :knowledge
  validates :content, presence: true
end
