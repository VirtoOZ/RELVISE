import * as nodePath from 'path'; // получаем имя папки проекта
const rootFolder = nodePath.basename(nodePath.resolve());//c помощью модуля path, в константу получем имя папки проекта

const buildFolder = `./dist`; //также можно использовать rootFolder
const srcFolder = `./src`;

export const path = {
	// объект путей с результатом
	build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/files/`,
	},
	// объект путей к исходным файлам
	src: {
		js: `${srcFolder}/js/app.js`, //путь к папке c файлом стилей
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`, //путь к папке c файлом стилей
		svg: `${srcFolder}/img/**/*.svg`, //путь к папке c файлом стилей
		svgicons: `${srcFolder}/svgicons/*.svg`, //путь к папке c файлом стилей
		scss: `${srcFolder}/scss/style.scss`, //путь к папке c файлом стилей
		html: `${srcFolder}/*.html`, //путь к папке в которой есть файлы html
		// html: `${srcFolder}/*.pug`, // Для Pug`, путь к папке в которой есть файлы html
		files: `${srcFolder}/files/**/*.*`, //путь к папке которую хотим копировать
		fonts: `${srcFolder}/fonts/*.ttf`, //путь к папке которую хотим копировать
	},
	// объект путей к файлам за которыми нужно следить
	watch: {
		js: `${srcFolder}/js/**/*.js`, //путь к файлам которые необходимо отслеживать на изменение
		scss: `${srcFolder}/scss/**/*.scss`, //путь к файлам которые необходимо отслеживать на изменение
		html: `${srcFolder}/**/*.html`,
		// html: `${srcFolder}/**/*.pug`, // Для Pug
		images: `${srcFolder}/img/**/*.+(jpg|jpeg|png|gif|webp|ico|svg)`, //путь к папке c файлом стилей
		// images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`, //путь к папке c файлом стилей
		files: `${srcFolder}/files/**/*.*`, //путь к файлам которые необходимо отслеживать на изменение
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: `test`,
}