import {
  bigint,
  boolean,
  datetime,
  decimal,
  mysqlTable,
  smallint,
  text,
  timestamp,
  varchar
} from 'drizzle-orm/mysql-core';






export const usuario = mysqlTable('usuario', {
  id: bigint('id', { mode: 'bigint' }).primaryKey().autoincrement(),
  email: varchar('email', { length: 40 }),
  nombre: varchar('nombre', { length: 40 }),
  apellidoPaterno: varchar('apellidoPaterno', { length: 40 }),
  apellidoMaterno: varchar('apellidoMaterno', { length: 40 }),

});

export const rolDeUsuario = mysqlTable('rolDeUsuario', {
  id: bigint('id', { mode: 'bigint' }).primaryKey().autoincrement(),
  usuarioId: bigint('usuarioId', { mode: 'bigint' })
      .references(() => usuario.id),
  rolId: bigint('rolId', { mode: 'bigint' })
      .references(() => rol.id),
});

export const rol = mysqlTable('rol', {
  id: bigint('id', { mode: 'bigint' }).primaryKey().autoincrement(),
  rol: varchar('rol', { length: 40 }),
});



export const claimDeUsuario = mysqlTable('claimDeUsuario', {
  id: bigint('id', { mode: 'bigint' }).primaryKey().autoincrement(),
  claimType: varchar('claimType', { length: 6 }),
  claimValue: varchar('claimType', { length: 6 }),
  usuarioId: bigint('usuarioId', { mode: 'bigint' })
    .references(() => usuario.id),
});

export const alumno = mysqlTable('alumno', {
  id: bigint('id', { mode: 'bigint' }).primaryKey().autoincrement(),
  email: varchar('email', { length: 40 }),
  nombre: varchar('nombre', { length: 40 }),
  apellidoPaterno: varchar('apellidoPaterno', { length: 40 }),
  apellidoMaterno: varchar('apellidoMaterno', { length: 40 }),
  password: varchar('password', { length: 150 }),
  registradoEn: timestamp('registradoEn').notNull().defaultNow(),

});







export const modalidadDeEstudio = mysqlTable('modalidadDeEstudio', {
  id: bigint('id', { mode: 'bigint' }).primaryKey().autoincrement(),
  modalidad: varchar('modalidad', { length: 15 }),
  tipoDeCiclo: varchar('tipoDeCiclo', { length: 15 }),
  noDeCiclos: smallint('noDeCiclos'),
});


export const planDeEstudio = mysqlTable('planDeEstudio', {
  id: bigint('id', { mode: 'bigint' }).primaryKey().autoincrement(),
  claveExterna: varchar('claveExterna', { length: 10 }),
  nombre: varchar('nombre', { length: 80 }),
  nivelAcademico: varchar('nivelAcademico', { length: 80 }),
  puedenInscribirse: boolean('habilitadoParaInscripcion').default(false),
  estaBloqueado: boolean('estaBloqueado').default(false),
  creadoEn: timestamp('creadoEn').notNull().defaultNow(),
  modificadoEn: timestamp('modificadoEn'),
  ultimaVezModificadoPor: bigint('ultimaVezModificadoPor', { mode: 'bigint' })
    .references(() => usuario.id),

});


