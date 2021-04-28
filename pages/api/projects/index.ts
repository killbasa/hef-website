import type { NextApiRequest, NextApiResponse } from 'next';
import Project from '../../../models/Project';

// eslint-disable-next-line consistent-return
export default async (req: NextApiRequest, res: NextApiResponse) => {
	const projects = await Project.find({}).exec()
		.catch(() => {
			res.status(500).end();
		});

	res.status(200).json(projects);
};