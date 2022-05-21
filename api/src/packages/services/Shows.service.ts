import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ShowDto } from '../dtos/Shows.dto';
import { Show } from '../entitities/shows.entity';

@Injectable()
export class ShowsService {
  constructor(
    @Inject('SHOW_REPOSITORY')
    private showRepository: typeof Show,
  ) {}

  async create(show: ShowDto): Promise<Show> {
    const newShow = new Show({ ...show });
    await newShow.save();
    return newShow;
  }

  async delete(id: number): Promise<Show> {
    const show = await this.showRepository.findByPk(id);
    if (!show) {
      throw new NotFoundException('Show not found');
    }
    await show.destroy();
    return show;
  }
}