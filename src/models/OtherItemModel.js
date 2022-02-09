import shortUUID from 'short-uuid';

export class OtherItemModel {
	constructor({
		id,
		label,
		width,
		length,
		height,
	} = {}) {
		this.id = id || shortUUID.uuid();
		this.label = label;
		this.width = width || 0;
		this.length = length || 0;
		this.height = height || 0;
	}

	isValid() {
		return !!this.label
			&& this.width > 0
			&& this.length > 0
			&& this.height > 0;
	}
}

export default OtherItemModel;
