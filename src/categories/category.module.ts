import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CategorySchema } from './schemas/category.schema';
import { CategoryService } from './shared/category.service';
import { CategoriesController } from './categories.controller';

@Module({
    imports: [
 
    MongooseModule.forFeature([
        {name: 'Category', schema: CategorySchema}
    ])
    ],
    providers: [ 
        CategoryService
    ],
    controllers: [
        CategoriesController
    ]
})
export class CategoryModule {}
