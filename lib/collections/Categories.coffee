Schemas = {}

Schemas.Categories = new SimpleSchema
	is_menu:
		type: Boolean
		optional: true
		label: "Добавить в меню"

	name:
		type: String
		label: "Название категории"
		max: 200

	slug:
		type: String
		autoform: 
			type: "hidden"
			label: false
		autoValue: ()-> 
			if @siblingField('name').isSet
				slugify(@siblingField('name').value)	

	description: 
		type: String
		label: "Описание категории"

	images: 
		type: [String]
		label: 'Добавление изображений'

	"images.$": 
		autoform:
			# afEachArrayItem: 

			afFieldInput: 
				type: 'fileUpload'
				collection: 'Images'
				label: 'Выберете нужный файл'
				onBeforeInsert: ()->
					(fileObj) ->
						# images = Images.find().fetch()
						# console.log "images: ", images
						fileObj    


@Categories = new Mongo.Collection "categories"
Categories.attachSchema(Schemas.Categories)

Categories.allow
	insert: ()-> 
		return true

	update: ()-> 
		return true

	remove: ()->
		return true


Categories.deny
	insert: ()-> 
		return false
	update: ()->
		# разрешаем редактировать только следующие два поля:
		return false



