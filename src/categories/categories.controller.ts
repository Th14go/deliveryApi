import { Controller, Get, Param, Body, Post, Put, Delete } from '@nestjs/common';
import  { Category } from './shared/category';
import  { CategoryService} from './shared/category.service';

@Controller('categories')
export class CategoriesController {

    constructor(
        private categoryService: CategoryService
    ){}

    @Get()
    async getAll(){
        return await this.categoryService.getAll();

    }
    @Get(':id')
    async getById(@Param('id') id: string){
        return await this.categoryService.getbyId(id);

    }
    @Post()
    async create(@Body() category: Category){
        return await this.categoryService.create(category);

    }
    @Put(':id')
    async update(@Param('id') id: string, @Body() category: Category){
        return await this.categoryService.update(id, category);
    }
    @Delete(':id')
    async delete(@Param('id') id: string){
        return await this.categoryService.delete(id);

    }
}
