import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Credentials } from './credentials.entity';

import { SaveUserCredentialsDto } from './credentials.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Credentials)
    private credentialsRepository: Repository<Credentials>,
  ) {}

  findAll(): Promise<Credentials[]> {
    return this.credentialsRepository.find();
  }

  findOne(id: string): Promise<Credentials> {
    return this.credentialsRepository.findOne(id);
  }
  
  async create(credentials: SaveUserCredentialsDto) {
      return await this.credentialsRepository.save(credentials);
  }
}