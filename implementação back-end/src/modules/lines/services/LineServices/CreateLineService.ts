import { injectable, inject } from 'tsyringe';

import Line from '../../infra/typeorm/entities/Line';

import ILines from '../../dtos/ICreateLineDTO';
import ILineRepository from '../../repositories/ILineRepository';

@injectable()
class CreateLineService {
  constructor(
    @inject('LinesRepository')
    private linesRepository: ILineRepository,
  ) {}

  public async execute({ name, stop_name }: ILines): Promise<Line> {
    const stop = await this.linesRepository.create({
      name,
      stop_name,
    });

    return stop;
  }
}

export default CreateLineService;
