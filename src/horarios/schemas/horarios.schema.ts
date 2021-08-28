import * as mongoose from 'mongoose';

export const HorarioSchema = new mongoose.Schema({
  diaSemana: String,
  horaini: String,
  horafim: String,
});
