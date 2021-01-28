import type { NextApiRequest, NextApiResponse } from 'next';

const sayHello = (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ msg: 'Welcome to the new OpenLoop Health API' });
};

export default sayHello;
