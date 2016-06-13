baseUrl = ""

if Meteor.isServer 
	baseUrl = process.env.PWD
	console.log "baseUrl: ", baseUrl + '/uploads'


@Images = new FS.Collection "images", {
	# stores: [ new FS.Store.FileSystem "images", {path: "/Users/greenteamer/Desktop/meteor/app/frezerov/uploads"} ]
	stores: [new FS.Store.FileSystem "images", {path: baseUrl + '/uploads'} ]
	# stores: [new FS.Store.FileSystem "images", {path: '~/uploads'} ]
}

Images.allow
	insert: ()->
		true
	update: ()->
		true
	remove: ()->
		true
	download:()->
		true
	# insert: (userId, doc, fields, modifier)->
	# 	checkSuperuser(userId)

	# update: (userId, doc, fields, modifier)->
	# 	checkSuperuser(userId)

	# remove: (userId, doc, fields, modifier)->
	# 	checkSuperuser(userId)
		
	# download:(userId, doc, fields, modifier)->
	# 	checkSuperuser(userId)
