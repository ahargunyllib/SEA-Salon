export type Review = {
	id: string;
	comment: string;
	rating: number;
	user: {
		fullName: string;
	};
};

export type Service = {
	id: number;
	name: string;
	description: string;
	duration: number;
};

export type Branch = {
	id: number;
	name: string;
	location: string;
	openingTime: Date;
	closingTime: Date;
	services: {
		id: number;
		name: string;
	}[];
};

export type Reservation = {
	id: number;
	userId: string;
	branchId: number;
  branch: {
    id: number;
    name: string;
  };
	serviceId: number;
  service: {
    id: number;
    name: string;
  };
	date: Date;
	time: Date;
	name: string;
	phoneNumber: string;
};
