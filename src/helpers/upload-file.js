import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const uploadFile = (
	files,
	validExtensions = ['png', 'jpg', 'jpeg', 'gif'],
	folder = '',
) => {
	return new Promise((resolve, reject) => {
		const { file } = files;
		// Validate the existence of the file

		const fileNameSegments = file.name.split('.');
		const fileExtension = fileNameSegments[fileNameSegments.length - 1];

		// Validate the extension

		if (!validExtensions.includes(fileExtension)) {
			return reject(
				`The extension ${fileExtension} is not allowed; it must be one of: ${validExtensions}`,
			);
		}

		const temporaryName = uuidv4() + '.' + fileExtension;
		const uploadPath = path.join(
			__dirname,
			'../uploads/',
			folder,
			temporaryName,
		);

		file.mv(uploadPath, (err) => {
			if (err) {
				return reject(err);
			}

			resolve(temporaryName);
		});
	});
};

export { uploadFile };
