#encoding: utf-8
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

knowledges = Knowledge.create([{title: '知识标题0', order: 1, content: '<p>haha<b>你好</b></p>'}, {title: '知识标题一', order: 1, content: '知识内容一'}, {title: '知识标题二', order: 2, content: '知识内容二'}])

comments = Comment.create([{username: '游客一', content: '写得真好啊！', title:'评论一下', knowledge: knowledges.first} , {username: '游客二', content: '写得不错！', title:'太好了', knowledge: knowledges.first} , {username: '游客三', content: '鼓励一下！', title:'鼓励', knowledge: knowledges.second} , {username: '游客四', content: '加油拼搏！', title:'加油', knowledge: knowledges.second} ])