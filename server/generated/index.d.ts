
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Mentor
 * 
 */
export type Mentor = $Result.DefaultSelection<Prisma.$MentorPayload>
/**
 * Model PlacementOfficer
 * 
 */
export type PlacementOfficer = $Result.DefaultSelection<Prisma.$PlacementOfficerPayload>
/**
 * Model Internship
 * 
 */
export type Internship = $Result.DefaultSelection<Prisma.$InternshipPayload>
/**
 * Model StudentInternship
 * 
 */
export type StudentInternship = $Result.DefaultSelection<Prisma.$StudentInternshipPayload>
/**
 * Model SavedInternship
 * 
 */
export type SavedInternship = $Result.DefaultSelection<Prisma.$SavedInternshipPayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model StudentSkill
 * 
 */
export type StudentSkill = $Result.DefaultSelection<Prisma.$StudentSkillPayload>
/**
 * Model InternshipSkill
 * 
 */
export type InternshipSkill = $Result.DefaultSelection<Prisma.$InternshipSkillPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  STUDENT: 'STUDENT',
  MENTOR: 'MENTOR',
  PLACEMENT_OFFICER: 'PLACEMENT_OFFICER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Mode: {
  ONLINE: 'ONLINE',
  OFFLINE: 'OFFLINE',
  HYBRID: 'HYBRID'
};

export type Mode = (typeof Mode)[keyof typeof Mode]


export const InternshipStatus: {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED'
};

export type InternshipStatus = (typeof InternshipStatus)[keyof typeof InternshipStatus]


export const StudentInternshipStatus: {
  APPLIED: 'APPLIED',
  ONGOING: 'ONGOING',
  REJECTED: 'REJECTED',
  COMPLETED: 'COMPLETED'
};

export type StudentInternshipStatus = (typeof StudentInternshipStatus)[keyof typeof StudentInternshipStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Mode = $Enums.Mode

export const Mode: typeof $Enums.Mode

export type InternshipStatus = $Enums.InternshipStatus

export const InternshipStatus: typeof $Enums.InternshipStatus

export type StudentInternshipStatus = $Enums.StudentInternshipStatus

export const StudentInternshipStatus: typeof $Enums.StudentInternshipStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mentor`: Exposes CRUD operations for the **Mentor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mentors
    * const mentors = await prisma.mentor.findMany()
    * ```
    */
  get mentor(): Prisma.MentorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.placementOfficer`: Exposes CRUD operations for the **PlacementOfficer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlacementOfficers
    * const placementOfficers = await prisma.placementOfficer.findMany()
    * ```
    */
  get placementOfficer(): Prisma.PlacementOfficerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.internship`: Exposes CRUD operations for the **Internship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Internships
    * const internships = await prisma.internship.findMany()
    * ```
    */
  get internship(): Prisma.InternshipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentInternship`: Exposes CRUD operations for the **StudentInternship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentInternships
    * const studentInternships = await prisma.studentInternship.findMany()
    * ```
    */
  get studentInternship(): Prisma.StudentInternshipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedInternship`: Exposes CRUD operations for the **SavedInternship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedInternships
    * const savedInternships = await prisma.savedInternship.findMany()
    * ```
    */
  get savedInternship(): Prisma.SavedInternshipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentSkill`: Exposes CRUD operations for the **StudentSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentSkills
    * const studentSkills = await prisma.studentSkill.findMany()
    * ```
    */
  get studentSkill(): Prisma.StudentSkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.internshipSkill`: Exposes CRUD operations for the **InternshipSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InternshipSkills
    * const internshipSkills = await prisma.internshipSkill.findMany()
    * ```
    */
  get internshipSkill(): Prisma.InternshipSkillDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Student: 'Student',
    Mentor: 'Mentor',
    PlacementOfficer: 'PlacementOfficer',
    Internship: 'Internship',
    StudentInternship: 'StudentInternship',
    SavedInternship: 'SavedInternship',
    Skill: 'Skill',
    StudentSkill: 'StudentSkill',
    InternshipSkill: 'InternshipSkill'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "student" | "mentor" | "placementOfficer" | "internship" | "studentInternship" | "savedInternship" | "skill" | "studentSkill" | "internshipSkill"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Mentor: {
        payload: Prisma.$MentorPayload<ExtArgs>
        fields: Prisma.MentorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MentorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MentorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>
          }
          findFirst: {
            args: Prisma.MentorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MentorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>
          }
          findMany: {
            args: Prisma.MentorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>[]
          }
          create: {
            args: Prisma.MentorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>
          }
          createMany: {
            args: Prisma.MentorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MentorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>[]
          }
          delete: {
            args: Prisma.MentorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>
          }
          update: {
            args: Prisma.MentorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>
          }
          deleteMany: {
            args: Prisma.MentorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MentorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MentorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>[]
          }
          upsert: {
            args: Prisma.MentorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>
          }
          aggregate: {
            args: Prisma.MentorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMentor>
          }
          groupBy: {
            args: Prisma.MentorGroupByArgs<ExtArgs>
            result: $Utils.Optional<MentorGroupByOutputType>[]
          }
          count: {
            args: Prisma.MentorCountArgs<ExtArgs>
            result: $Utils.Optional<MentorCountAggregateOutputType> | number
          }
        }
      }
      PlacementOfficer: {
        payload: Prisma.$PlacementOfficerPayload<ExtArgs>
        fields: Prisma.PlacementOfficerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlacementOfficerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementOfficerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlacementOfficerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementOfficerPayload>
          }
          findFirst: {
            args: Prisma.PlacementOfficerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementOfficerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlacementOfficerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementOfficerPayload>
          }
          findMany: {
            args: Prisma.PlacementOfficerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementOfficerPayload>[]
          }
          create: {
            args: Prisma.PlacementOfficerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementOfficerPayload>
          }
          createMany: {
            args: Prisma.PlacementOfficerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlacementOfficerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementOfficerPayload>[]
          }
          delete: {
            args: Prisma.PlacementOfficerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementOfficerPayload>
          }
          update: {
            args: Prisma.PlacementOfficerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementOfficerPayload>
          }
          deleteMany: {
            args: Prisma.PlacementOfficerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlacementOfficerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlacementOfficerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementOfficerPayload>[]
          }
          upsert: {
            args: Prisma.PlacementOfficerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementOfficerPayload>
          }
          aggregate: {
            args: Prisma.PlacementOfficerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlacementOfficer>
          }
          groupBy: {
            args: Prisma.PlacementOfficerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlacementOfficerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlacementOfficerCountArgs<ExtArgs>
            result: $Utils.Optional<PlacementOfficerCountAggregateOutputType> | number
          }
        }
      }
      Internship: {
        payload: Prisma.$InternshipPayload<ExtArgs>
        fields: Prisma.InternshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InternshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InternshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipPayload>
          }
          findFirst: {
            args: Prisma.InternshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InternshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipPayload>
          }
          findMany: {
            args: Prisma.InternshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipPayload>[]
          }
          create: {
            args: Prisma.InternshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipPayload>
          }
          createMany: {
            args: Prisma.InternshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InternshipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipPayload>[]
          }
          delete: {
            args: Prisma.InternshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipPayload>
          }
          update: {
            args: Prisma.InternshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipPayload>
          }
          deleteMany: {
            args: Prisma.InternshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InternshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InternshipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipPayload>[]
          }
          upsert: {
            args: Prisma.InternshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipPayload>
          }
          aggregate: {
            args: Prisma.InternshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInternship>
          }
          groupBy: {
            args: Prisma.InternshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<InternshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.InternshipCountArgs<ExtArgs>
            result: $Utils.Optional<InternshipCountAggregateOutputType> | number
          }
        }
      }
      StudentInternship: {
        payload: Prisma.$StudentInternshipPayload<ExtArgs>
        fields: Prisma.StudentInternshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentInternshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentInternshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentInternshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentInternshipPayload>
          }
          findFirst: {
            args: Prisma.StudentInternshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentInternshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentInternshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentInternshipPayload>
          }
          findMany: {
            args: Prisma.StudentInternshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentInternshipPayload>[]
          }
          create: {
            args: Prisma.StudentInternshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentInternshipPayload>
          }
          createMany: {
            args: Prisma.StudentInternshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentInternshipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentInternshipPayload>[]
          }
          delete: {
            args: Prisma.StudentInternshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentInternshipPayload>
          }
          update: {
            args: Prisma.StudentInternshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentInternshipPayload>
          }
          deleteMany: {
            args: Prisma.StudentInternshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentInternshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentInternshipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentInternshipPayload>[]
          }
          upsert: {
            args: Prisma.StudentInternshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentInternshipPayload>
          }
          aggregate: {
            args: Prisma.StudentInternshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentInternship>
          }
          groupBy: {
            args: Prisma.StudentInternshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentInternshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentInternshipCountArgs<ExtArgs>
            result: $Utils.Optional<StudentInternshipCountAggregateOutputType> | number
          }
        }
      }
      SavedInternship: {
        payload: Prisma.$SavedInternshipPayload<ExtArgs>
        fields: Prisma.SavedInternshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedInternshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedInternshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedInternshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedInternshipPayload>
          }
          findFirst: {
            args: Prisma.SavedInternshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedInternshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedInternshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedInternshipPayload>
          }
          findMany: {
            args: Prisma.SavedInternshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedInternshipPayload>[]
          }
          create: {
            args: Prisma.SavedInternshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedInternshipPayload>
          }
          createMany: {
            args: Prisma.SavedInternshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedInternshipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedInternshipPayload>[]
          }
          delete: {
            args: Prisma.SavedInternshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedInternshipPayload>
          }
          update: {
            args: Prisma.SavedInternshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedInternshipPayload>
          }
          deleteMany: {
            args: Prisma.SavedInternshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedInternshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavedInternshipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedInternshipPayload>[]
          }
          upsert: {
            args: Prisma.SavedInternshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedInternshipPayload>
          }
          aggregate: {
            args: Prisma.SavedInternshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedInternship>
          }
          groupBy: {
            args: Prisma.SavedInternshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedInternshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedInternshipCountArgs<ExtArgs>
            result: $Utils.Optional<SavedInternshipCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      StudentSkill: {
        payload: Prisma.$StudentSkillPayload<ExtArgs>
        fields: Prisma.StudentSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSkillPayload>
          }
          findFirst: {
            args: Prisma.StudentSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSkillPayload>
          }
          findMany: {
            args: Prisma.StudentSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSkillPayload>[]
          }
          create: {
            args: Prisma.StudentSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSkillPayload>
          }
          createMany: {
            args: Prisma.StudentSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSkillPayload>[]
          }
          delete: {
            args: Prisma.StudentSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSkillPayload>
          }
          update: {
            args: Prisma.StudentSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSkillPayload>
          }
          deleteMany: {
            args: Prisma.StudentSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentSkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSkillPayload>[]
          }
          upsert: {
            args: Prisma.StudentSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSkillPayload>
          }
          aggregate: {
            args: Prisma.StudentSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentSkill>
          }
          groupBy: {
            args: Prisma.StudentSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentSkillCountArgs<ExtArgs>
            result: $Utils.Optional<StudentSkillCountAggregateOutputType> | number
          }
        }
      }
      InternshipSkill: {
        payload: Prisma.$InternshipSkillPayload<ExtArgs>
        fields: Prisma.InternshipSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InternshipSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InternshipSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipSkillPayload>
          }
          findFirst: {
            args: Prisma.InternshipSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InternshipSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipSkillPayload>
          }
          findMany: {
            args: Prisma.InternshipSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipSkillPayload>[]
          }
          create: {
            args: Prisma.InternshipSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipSkillPayload>
          }
          createMany: {
            args: Prisma.InternshipSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InternshipSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipSkillPayload>[]
          }
          delete: {
            args: Prisma.InternshipSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipSkillPayload>
          }
          update: {
            args: Prisma.InternshipSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipSkillPayload>
          }
          deleteMany: {
            args: Prisma.InternshipSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InternshipSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InternshipSkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipSkillPayload>[]
          }
          upsert: {
            args: Prisma.InternshipSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipSkillPayload>
          }
          aggregate: {
            args: Prisma.InternshipSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInternshipSkill>
          }
          groupBy: {
            args: Prisma.InternshipSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<InternshipSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.InternshipSkillCountArgs<ExtArgs>
            result: $Utils.Optional<InternshipSkillCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    student?: StudentOmit
    mentor?: MentorOmit
    placementOfficer?: PlacementOfficerOmit
    internship?: InternshipOmit
    studentInternship?: StudentInternshipOmit
    savedInternship?: SavedInternshipOmit
    skill?: SkillOmit
    studentSkill?: StudentSkillOmit
    internshipSkill?: InternshipSkillOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    savedInternships: number
    internships: number
    skills: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedInternships?: boolean | StudentCountOutputTypeCountSavedInternshipsArgs
    internships?: boolean | StudentCountOutputTypeCountInternshipsArgs
    skills?: boolean | StudentCountOutputTypeCountSkillsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountSavedInternshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedInternshipWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountInternshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentInternshipWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentSkillWhereInput
  }


  /**
   * Count Type MentorCountOutputType
   */

  export type MentorCountOutputType = {
    students: number
  }

  export type MentorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | MentorCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * MentorCountOutputType without action
   */
  export type MentorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorCountOutputType
     */
    select?: MentorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MentorCountOutputType without action
   */
  export type MentorCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }


  /**
   * Count Type PlacementOfficerCountOutputType
   */

  export type PlacementOfficerCountOutputType = {
    internships: number
  }

  export type PlacementOfficerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    internships?: boolean | PlacementOfficerCountOutputTypeCountInternshipsArgs
  }

  // Custom InputTypes
  /**
   * PlacementOfficerCountOutputType without action
   */
  export type PlacementOfficerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementOfficerCountOutputType
     */
    select?: PlacementOfficerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlacementOfficerCountOutputType without action
   */
  export type PlacementOfficerCountOutputTypeCountInternshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InternshipWhereInput
  }


  /**
   * Count Type InternshipCountOutputType
   */

  export type InternshipCountOutputType = {
    skills: number
    savedBy: number
    applicants: number
  }

  export type InternshipCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | InternshipCountOutputTypeCountSkillsArgs
    savedBy?: boolean | InternshipCountOutputTypeCountSavedByArgs
    applicants?: boolean | InternshipCountOutputTypeCountApplicantsArgs
  }

  // Custom InputTypes
  /**
   * InternshipCountOutputType without action
   */
  export type InternshipCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternshipCountOutputType
     */
    select?: InternshipCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InternshipCountOutputType without action
   */
  export type InternshipCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InternshipSkillWhereInput
  }

  /**
   * InternshipCountOutputType without action
   */
  export type InternshipCountOutputTypeCountSavedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedInternshipWhereInput
  }

  /**
   * InternshipCountOutputType without action
   */
  export type InternshipCountOutputTypeCountApplicantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentInternshipWhereInput
  }


  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    internships: number
    students: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    internships?: boolean | SkillCountOutputTypeCountInternshipsArgs
    students?: boolean | SkillCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     */
    select?: SkillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountInternshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InternshipSkillWhereInput
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentSkillWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phoneNo: string | null
    department: string | null
    role: $Enums.Role | null
    profileUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    userId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phoneNo: string | null
    department: string | null
    role: $Enums.Role | null
    profileUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    userId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phoneNo: number
    department: number
    role: number
    profileUrl: number
    isActive: number
    createdAt: number
    userId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNo?: true
    department?: true
    role?: true
    profileUrl?: true
    isActive?: true
    createdAt?: true
    userId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNo?: true
    department?: true
    role?: true
    profileUrl?: true
    isActive?: true
    createdAt?: true
    userId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNo?: true
    department?: true
    role?: true
    profileUrl?: true
    isActive?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    phoneNo: string | null
    department: string | null
    role: $Enums.Role
    profileUrl: string | null
    isActive: boolean
    createdAt: Date
    userId: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNo?: boolean
    department?: boolean
    role?: boolean
    profileUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    userId?: boolean
    mentor?: boolean | User$mentorArgs<ExtArgs>
    placementOfficer?: boolean | User$placementOfficerArgs<ExtArgs>
    student?: boolean | User$studentArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNo?: boolean
    department?: boolean
    role?: boolean
    profileUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    userId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNo?: boolean
    department?: boolean
    role?: boolean
    profileUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    userId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNo?: boolean
    department?: boolean
    role?: boolean
    profileUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phoneNo" | "department" | "role" | "profileUrl" | "isActive" | "createdAt" | "userId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentor?: boolean | User$mentorArgs<ExtArgs>
    placementOfficer?: boolean | User$placementOfficerArgs<ExtArgs>
    student?: boolean | User$studentArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      mentor: Prisma.$MentorPayload<ExtArgs> | null
      placementOfficer: Prisma.$PlacementOfficerPayload<ExtArgs> | null
      student: Prisma.$StudentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phoneNo: string | null
      department: string | null
      role: $Enums.Role
      profileUrl: string | null
      isActive: boolean
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mentor<T extends User$mentorArgs<ExtArgs> = {}>(args?: Subset<T, User$mentorArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    placementOfficer<T extends User$placementOfficerArgs<ExtArgs> = {}>(args?: Subset<T, User$placementOfficerArgs<ExtArgs>>): Prisma__PlacementOfficerClient<$Result.GetResult<Prisma.$PlacementOfficerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    student<T extends User$studentArgs<ExtArgs> = {}>(args?: Subset<T, User$studentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phoneNo: FieldRef<"User", 'String'>
    readonly department: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly profileUrl: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly userId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.mentor
   */
  export type User$mentorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    where?: MentorWhereInput
  }

  /**
   * User.placementOfficer
   */
  export type User$placementOfficerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementOfficer
     */
    select?: PlacementOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementOfficer
     */
    omit?: PlacementOfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementOfficerInclude<ExtArgs> | null
    where?: PlacementOfficerWhereInput
  }

  /**
   * User.student
   */
  export type User$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    semester: number | null
    year: number | null
    cgpa: Decimal | null
  }

  export type StudentSumAggregateOutputType = {
    semester: number | null
    year: number | null
    cgpa: Decimal | null
  }

  export type StudentMinAggregateOutputType = {
    userId: string | null
    semester: number | null
    year: number | null
    cgpa: Decimal | null
    resumeUrl: string | null
    profileCompleted: boolean | null
    mentorId: string | null
  }

  export type StudentMaxAggregateOutputType = {
    userId: string | null
    semester: number | null
    year: number | null
    cgpa: Decimal | null
    resumeUrl: string | null
    profileCompleted: boolean | null
    mentorId: string | null
  }

  export type StudentCountAggregateOutputType = {
    userId: number
    semester: number
    year: number
    cgpa: number
    resumeUrl: number
    profileCompleted: number
    mentorId: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    semester?: true
    year?: true
    cgpa?: true
  }

  export type StudentSumAggregateInputType = {
    semester?: true
    year?: true
    cgpa?: true
  }

  export type StudentMinAggregateInputType = {
    userId?: true
    semester?: true
    year?: true
    cgpa?: true
    resumeUrl?: true
    profileCompleted?: true
    mentorId?: true
  }

  export type StudentMaxAggregateInputType = {
    userId?: true
    semester?: true
    year?: true
    cgpa?: true
    resumeUrl?: true
    profileCompleted?: true
    mentorId?: true
  }

  export type StudentCountAggregateInputType = {
    userId?: true
    semester?: true
    year?: true
    cgpa?: true
    resumeUrl?: true
    profileCompleted?: true
    mentorId?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    userId: string
    semester: number | null
    year: number | null
    cgpa: Decimal | null
    resumeUrl: string | null
    profileCompleted: boolean
    mentorId: string | null
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    semester?: boolean
    year?: boolean
    cgpa?: boolean
    resumeUrl?: boolean
    profileCompleted?: boolean
    mentorId?: boolean
    savedInternships?: boolean | Student$savedInternshipsArgs<ExtArgs>
    internships?: boolean | Student$internshipsArgs<ExtArgs>
    skills?: boolean | Student$skillsArgs<ExtArgs>
    mentor?: boolean | Student$mentorArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    semester?: boolean
    year?: boolean
    cgpa?: boolean
    resumeUrl?: boolean
    profileCompleted?: boolean
    mentorId?: boolean
    mentor?: boolean | Student$mentorArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    semester?: boolean
    year?: boolean
    cgpa?: boolean
    resumeUrl?: boolean
    profileCompleted?: boolean
    mentorId?: boolean
    mentor?: boolean | Student$mentorArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    userId?: boolean
    semester?: boolean
    year?: boolean
    cgpa?: boolean
    resumeUrl?: boolean
    profileCompleted?: boolean
    mentorId?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "semester" | "year" | "cgpa" | "resumeUrl" | "profileCompleted" | "mentorId", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedInternships?: boolean | Student$savedInternshipsArgs<ExtArgs>
    internships?: boolean | Student$internshipsArgs<ExtArgs>
    skills?: boolean | Student$skillsArgs<ExtArgs>
    mentor?: boolean | Student$mentorArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentor?: boolean | Student$mentorArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentor?: boolean | Student$mentorArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      savedInternships: Prisma.$SavedInternshipPayload<ExtArgs>[]
      internships: Prisma.$StudentInternshipPayload<ExtArgs>[]
      skills: Prisma.$StudentSkillPayload<ExtArgs>[]
      mentor: Prisma.$MentorPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      semester: number | null
      year: number | null
      cgpa: Prisma.Decimal | null
      resumeUrl: string | null
      profileCompleted: boolean
      mentorId: string | null
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const studentWithUserIdOnly = await prisma.student.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `userId`
     * const studentWithUserIdOnly = await prisma.student.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `userId`
     * const studentWithUserIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    savedInternships<T extends Student$savedInternshipsArgs<ExtArgs> = {}>(args?: Subset<T, Student$savedInternshipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedInternshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    internships<T extends Student$internshipsArgs<ExtArgs> = {}>(args?: Subset<T, Student$internshipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentInternshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    skills<T extends Student$skillsArgs<ExtArgs> = {}>(args?: Subset<T, Student$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mentor<T extends Student$mentorArgs<ExtArgs> = {}>(args?: Subset<T, Student$mentorArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly userId: FieldRef<"Student", 'String'>
    readonly semester: FieldRef<"Student", 'Int'>
    readonly year: FieldRef<"Student", 'Int'>
    readonly cgpa: FieldRef<"Student", 'Decimal'>
    readonly resumeUrl: FieldRef<"Student", 'String'>
    readonly profileCompleted: FieldRef<"Student", 'Boolean'>
    readonly mentorId: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.savedInternships
   */
  export type Student$savedInternshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedInternship
     */
    select?: SavedInternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedInternship
     */
    omit?: SavedInternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedInternshipInclude<ExtArgs> | null
    where?: SavedInternshipWhereInput
    orderBy?: SavedInternshipOrderByWithRelationInput | SavedInternshipOrderByWithRelationInput[]
    cursor?: SavedInternshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedInternshipScalarFieldEnum | SavedInternshipScalarFieldEnum[]
  }

  /**
   * Student.internships
   */
  export type Student$internshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentInternship
     */
    select?: StudentInternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentInternship
     */
    omit?: StudentInternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInternshipInclude<ExtArgs> | null
    where?: StudentInternshipWhereInput
    orderBy?: StudentInternshipOrderByWithRelationInput | StudentInternshipOrderByWithRelationInput[]
    cursor?: StudentInternshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentInternshipScalarFieldEnum | StudentInternshipScalarFieldEnum[]
  }

  /**
   * Student.skills
   */
  export type Student$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSkill
     */
    select?: StudentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSkill
     */
    omit?: StudentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSkillInclude<ExtArgs> | null
    where?: StudentSkillWhereInput
    orderBy?: StudentSkillOrderByWithRelationInput | StudentSkillOrderByWithRelationInput[]
    cursor?: StudentSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentSkillScalarFieldEnum | StudentSkillScalarFieldEnum[]
  }

  /**
   * Student.mentor
   */
  export type Student$mentorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    where?: MentorWhereInput
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Mentor
   */

  export type AggregateMentor = {
    _count: MentorCountAggregateOutputType | null
    _avg: MentorAvgAggregateOutputType | null
    _sum: MentorSumAggregateOutputType | null
    _min: MentorMinAggregateOutputType | null
    _max: MentorMaxAggregateOutputType | null
  }

  export type MentorAvgAggregateOutputType = {
    experienceYears: number | null
  }

  export type MentorSumAggregateOutputType = {
    experienceYears: number | null
  }

  export type MentorMinAggregateOutputType = {
    userId: string | null
    designation: string | null
    experienceYears: number | null
  }

  export type MentorMaxAggregateOutputType = {
    userId: string | null
    designation: string | null
    experienceYears: number | null
  }

  export type MentorCountAggregateOutputType = {
    userId: number
    designation: number
    experienceYears: number
    _all: number
  }


  export type MentorAvgAggregateInputType = {
    experienceYears?: true
  }

  export type MentorSumAggregateInputType = {
    experienceYears?: true
  }

  export type MentorMinAggregateInputType = {
    userId?: true
    designation?: true
    experienceYears?: true
  }

  export type MentorMaxAggregateInputType = {
    userId?: true
    designation?: true
    experienceYears?: true
  }

  export type MentorCountAggregateInputType = {
    userId?: true
    designation?: true
    experienceYears?: true
    _all?: true
  }

  export type MentorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mentor to aggregate.
     */
    where?: MentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mentors to fetch.
     */
    orderBy?: MentorOrderByWithRelationInput | MentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mentors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mentors
    **/
    _count?: true | MentorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MentorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MentorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MentorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MentorMaxAggregateInputType
  }

  export type GetMentorAggregateType<T extends MentorAggregateArgs> = {
        [P in keyof T & keyof AggregateMentor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMentor[P]>
      : GetScalarType<T[P], AggregateMentor[P]>
  }




  export type MentorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MentorWhereInput
    orderBy?: MentorOrderByWithAggregationInput | MentorOrderByWithAggregationInput[]
    by: MentorScalarFieldEnum[] | MentorScalarFieldEnum
    having?: MentorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MentorCountAggregateInputType | true
    _avg?: MentorAvgAggregateInputType
    _sum?: MentorSumAggregateInputType
    _min?: MentorMinAggregateInputType
    _max?: MentorMaxAggregateInputType
  }

  export type MentorGroupByOutputType = {
    userId: string
    designation: string | null
    experienceYears: number | null
    _count: MentorCountAggregateOutputType | null
    _avg: MentorAvgAggregateOutputType | null
    _sum: MentorSumAggregateOutputType | null
    _min: MentorMinAggregateOutputType | null
    _max: MentorMaxAggregateOutputType | null
  }

  type GetMentorGroupByPayload<T extends MentorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MentorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MentorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MentorGroupByOutputType[P]>
            : GetScalarType<T[P], MentorGroupByOutputType[P]>
        }
      >
    >


  export type MentorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    designation?: boolean
    experienceYears?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    students?: boolean | Mentor$studentsArgs<ExtArgs>
    _count?: boolean | MentorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentor"]>

  export type MentorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    designation?: boolean
    experienceYears?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentor"]>

  export type MentorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    designation?: boolean
    experienceYears?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentor"]>

  export type MentorSelectScalar = {
    userId?: boolean
    designation?: boolean
    experienceYears?: boolean
  }

  export type MentorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "designation" | "experienceYears", ExtArgs["result"]["mentor"]>
  export type MentorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    students?: boolean | Mentor$studentsArgs<ExtArgs>
    _count?: boolean | MentorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MentorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MentorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MentorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mentor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      students: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      designation: string | null
      experienceYears: number | null
    }, ExtArgs["result"]["mentor"]>
    composites: {}
  }

  type MentorGetPayload<S extends boolean | null | undefined | MentorDefaultArgs> = $Result.GetResult<Prisma.$MentorPayload, S>

  type MentorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MentorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MentorCountAggregateInputType | true
    }

  export interface MentorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mentor'], meta: { name: 'Mentor' } }
    /**
     * Find zero or one Mentor that matches the filter.
     * @param {MentorFindUniqueArgs} args - Arguments to find a Mentor
     * @example
     * // Get one Mentor
     * const mentor = await prisma.mentor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MentorFindUniqueArgs>(args: SelectSubset<T, MentorFindUniqueArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mentor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MentorFindUniqueOrThrowArgs} args - Arguments to find a Mentor
     * @example
     * // Get one Mentor
     * const mentor = await prisma.mentor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MentorFindUniqueOrThrowArgs>(args: SelectSubset<T, MentorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mentor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorFindFirstArgs} args - Arguments to find a Mentor
     * @example
     * // Get one Mentor
     * const mentor = await prisma.mentor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MentorFindFirstArgs>(args?: SelectSubset<T, MentorFindFirstArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mentor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorFindFirstOrThrowArgs} args - Arguments to find a Mentor
     * @example
     * // Get one Mentor
     * const mentor = await prisma.mentor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MentorFindFirstOrThrowArgs>(args?: SelectSubset<T, MentorFindFirstOrThrowArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mentors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mentors
     * const mentors = await prisma.mentor.findMany()
     * 
     * // Get first 10 Mentors
     * const mentors = await prisma.mentor.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const mentorWithUserIdOnly = await prisma.mentor.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends MentorFindManyArgs>(args?: SelectSubset<T, MentorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mentor.
     * @param {MentorCreateArgs} args - Arguments to create a Mentor.
     * @example
     * // Create one Mentor
     * const Mentor = await prisma.mentor.create({
     *   data: {
     *     // ... data to create a Mentor
     *   }
     * })
     * 
     */
    create<T extends MentorCreateArgs>(args: SelectSubset<T, MentorCreateArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mentors.
     * @param {MentorCreateManyArgs} args - Arguments to create many Mentors.
     * @example
     * // Create many Mentors
     * const mentor = await prisma.mentor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MentorCreateManyArgs>(args?: SelectSubset<T, MentorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mentors and returns the data saved in the database.
     * @param {MentorCreateManyAndReturnArgs} args - Arguments to create many Mentors.
     * @example
     * // Create many Mentors
     * const mentor = await prisma.mentor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mentors and only return the `userId`
     * const mentorWithUserIdOnly = await prisma.mentor.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MentorCreateManyAndReturnArgs>(args?: SelectSubset<T, MentorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mentor.
     * @param {MentorDeleteArgs} args - Arguments to delete one Mentor.
     * @example
     * // Delete one Mentor
     * const Mentor = await prisma.mentor.delete({
     *   where: {
     *     // ... filter to delete one Mentor
     *   }
     * })
     * 
     */
    delete<T extends MentorDeleteArgs>(args: SelectSubset<T, MentorDeleteArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mentor.
     * @param {MentorUpdateArgs} args - Arguments to update one Mentor.
     * @example
     * // Update one Mentor
     * const mentor = await prisma.mentor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MentorUpdateArgs>(args: SelectSubset<T, MentorUpdateArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mentors.
     * @param {MentorDeleteManyArgs} args - Arguments to filter Mentors to delete.
     * @example
     * // Delete a few Mentors
     * const { count } = await prisma.mentor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MentorDeleteManyArgs>(args?: SelectSubset<T, MentorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mentors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mentors
     * const mentor = await prisma.mentor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MentorUpdateManyArgs>(args: SelectSubset<T, MentorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mentors and returns the data updated in the database.
     * @param {MentorUpdateManyAndReturnArgs} args - Arguments to update many Mentors.
     * @example
     * // Update many Mentors
     * const mentor = await prisma.mentor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mentors and only return the `userId`
     * const mentorWithUserIdOnly = await prisma.mentor.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MentorUpdateManyAndReturnArgs>(args: SelectSubset<T, MentorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mentor.
     * @param {MentorUpsertArgs} args - Arguments to update or create a Mentor.
     * @example
     * // Update or create a Mentor
     * const mentor = await prisma.mentor.upsert({
     *   create: {
     *     // ... data to create a Mentor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mentor we want to update
     *   }
     * })
     */
    upsert<T extends MentorUpsertArgs>(args: SelectSubset<T, MentorUpsertArgs<ExtArgs>>): Prisma__MentorClient<$Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mentors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorCountArgs} args - Arguments to filter Mentors to count.
     * @example
     * // Count the number of Mentors
     * const count = await prisma.mentor.count({
     *   where: {
     *     // ... the filter for the Mentors we want to count
     *   }
     * })
    **/
    count<T extends MentorCountArgs>(
      args?: Subset<T, MentorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MentorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mentor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MentorAggregateArgs>(args: Subset<T, MentorAggregateArgs>): Prisma.PrismaPromise<GetMentorAggregateType<T>>

    /**
     * Group by Mentor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MentorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MentorGroupByArgs['orderBy'] }
        : { orderBy?: MentorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MentorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMentorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mentor model
   */
  readonly fields: MentorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mentor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MentorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    students<T extends Mentor$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Mentor$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mentor model
   */
  interface MentorFieldRefs {
    readonly userId: FieldRef<"Mentor", 'String'>
    readonly designation: FieldRef<"Mentor", 'String'>
    readonly experienceYears: FieldRef<"Mentor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Mentor findUnique
   */
  export type MentorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    /**
     * Filter, which Mentor to fetch.
     */
    where: MentorWhereUniqueInput
  }

  /**
   * Mentor findUniqueOrThrow
   */
  export type MentorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    /**
     * Filter, which Mentor to fetch.
     */
    where: MentorWhereUniqueInput
  }

  /**
   * Mentor findFirst
   */
  export type MentorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    /**
     * Filter, which Mentor to fetch.
     */
    where?: MentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mentors to fetch.
     */
    orderBy?: MentorOrderByWithRelationInput | MentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mentors.
     */
    cursor?: MentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mentors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mentors.
     */
    distinct?: MentorScalarFieldEnum | MentorScalarFieldEnum[]
  }

  /**
   * Mentor findFirstOrThrow
   */
  export type MentorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    /**
     * Filter, which Mentor to fetch.
     */
    where?: MentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mentors to fetch.
     */
    orderBy?: MentorOrderByWithRelationInput | MentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mentors.
     */
    cursor?: MentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mentors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mentors.
     */
    distinct?: MentorScalarFieldEnum | MentorScalarFieldEnum[]
  }

  /**
   * Mentor findMany
   */
  export type MentorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    /**
     * Filter, which Mentors to fetch.
     */
    where?: MentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mentors to fetch.
     */
    orderBy?: MentorOrderByWithRelationInput | MentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mentors.
     */
    cursor?: MentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mentors.
     */
    skip?: number
    distinct?: MentorScalarFieldEnum | MentorScalarFieldEnum[]
  }

  /**
   * Mentor create
   */
  export type MentorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    /**
     * The data needed to create a Mentor.
     */
    data: XOR<MentorCreateInput, MentorUncheckedCreateInput>
  }

  /**
   * Mentor createMany
   */
  export type MentorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mentors.
     */
    data: MentorCreateManyInput | MentorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mentor createManyAndReturn
   */
  export type MentorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * The data used to create many Mentors.
     */
    data: MentorCreateManyInput | MentorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mentor update
   */
  export type MentorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    /**
     * The data needed to update a Mentor.
     */
    data: XOR<MentorUpdateInput, MentorUncheckedUpdateInput>
    /**
     * Choose, which Mentor to update.
     */
    where: MentorWhereUniqueInput
  }

  /**
   * Mentor updateMany
   */
  export type MentorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mentors.
     */
    data: XOR<MentorUpdateManyMutationInput, MentorUncheckedUpdateManyInput>
    /**
     * Filter which Mentors to update
     */
    where?: MentorWhereInput
    /**
     * Limit how many Mentors to update.
     */
    limit?: number
  }

  /**
   * Mentor updateManyAndReturn
   */
  export type MentorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * The data used to update Mentors.
     */
    data: XOR<MentorUpdateManyMutationInput, MentorUncheckedUpdateManyInput>
    /**
     * Filter which Mentors to update
     */
    where?: MentorWhereInput
    /**
     * Limit how many Mentors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mentor upsert
   */
  export type MentorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    /**
     * The filter to search for the Mentor to update in case it exists.
     */
    where: MentorWhereUniqueInput
    /**
     * In case the Mentor found by the `where` argument doesn't exist, create a new Mentor with this data.
     */
    create: XOR<MentorCreateInput, MentorUncheckedCreateInput>
    /**
     * In case the Mentor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MentorUpdateInput, MentorUncheckedUpdateInput>
  }

  /**
   * Mentor delete
   */
  export type MentorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
    /**
     * Filter which Mentor to delete.
     */
    where: MentorWhereUniqueInput
  }

  /**
   * Mentor deleteMany
   */
  export type MentorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mentors to delete
     */
    where?: MentorWhereInput
    /**
     * Limit how many Mentors to delete.
     */
    limit?: number
  }

  /**
   * Mentor.students
   */
  export type Mentor$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Mentor without action
   */
  export type MentorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null
  }


  /**
   * Model PlacementOfficer
   */

  export type AggregatePlacementOfficer = {
    _count: PlacementOfficerCountAggregateOutputType | null
    _min: PlacementOfficerMinAggregateOutputType | null
    _max: PlacementOfficerMaxAggregateOutputType | null
  }

  export type PlacementOfficerMinAggregateOutputType = {
    userId: string | null
  }

  export type PlacementOfficerMaxAggregateOutputType = {
    userId: string | null
  }

  export type PlacementOfficerCountAggregateOutputType = {
    userId: number
    _all: number
  }


  export type PlacementOfficerMinAggregateInputType = {
    userId?: true
  }

  export type PlacementOfficerMaxAggregateInputType = {
    userId?: true
  }

  export type PlacementOfficerCountAggregateInputType = {
    userId?: true
    _all?: true
  }

  export type PlacementOfficerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlacementOfficer to aggregate.
     */
    where?: PlacementOfficerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlacementOfficers to fetch.
     */
    orderBy?: PlacementOfficerOrderByWithRelationInput | PlacementOfficerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlacementOfficerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlacementOfficers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlacementOfficers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlacementOfficers
    **/
    _count?: true | PlacementOfficerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlacementOfficerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlacementOfficerMaxAggregateInputType
  }

  export type GetPlacementOfficerAggregateType<T extends PlacementOfficerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlacementOfficer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlacementOfficer[P]>
      : GetScalarType<T[P], AggregatePlacementOfficer[P]>
  }




  export type PlacementOfficerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlacementOfficerWhereInput
    orderBy?: PlacementOfficerOrderByWithAggregationInput | PlacementOfficerOrderByWithAggregationInput[]
    by: PlacementOfficerScalarFieldEnum[] | PlacementOfficerScalarFieldEnum
    having?: PlacementOfficerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlacementOfficerCountAggregateInputType | true
    _min?: PlacementOfficerMinAggregateInputType
    _max?: PlacementOfficerMaxAggregateInputType
  }

  export type PlacementOfficerGroupByOutputType = {
    userId: string
    _count: PlacementOfficerCountAggregateOutputType | null
    _min: PlacementOfficerMinAggregateOutputType | null
    _max: PlacementOfficerMaxAggregateOutputType | null
  }

  type GetPlacementOfficerGroupByPayload<T extends PlacementOfficerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlacementOfficerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlacementOfficerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlacementOfficerGroupByOutputType[P]>
            : GetScalarType<T[P], PlacementOfficerGroupByOutputType[P]>
        }
      >
    >


  export type PlacementOfficerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    internships?: boolean | PlacementOfficer$internshipsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PlacementOfficerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["placementOfficer"]>

  export type PlacementOfficerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["placementOfficer"]>

  export type PlacementOfficerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["placementOfficer"]>

  export type PlacementOfficerSelectScalar = {
    userId?: boolean
  }

  export type PlacementOfficerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId", ExtArgs["result"]["placementOfficer"]>
  export type PlacementOfficerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    internships?: boolean | PlacementOfficer$internshipsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PlacementOfficerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlacementOfficerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlacementOfficerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlacementOfficerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlacementOfficer"
    objects: {
      internships: Prisma.$InternshipPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
    }, ExtArgs["result"]["placementOfficer"]>
    composites: {}
  }

  type PlacementOfficerGetPayload<S extends boolean | null | undefined | PlacementOfficerDefaultArgs> = $Result.GetResult<Prisma.$PlacementOfficerPayload, S>

  type PlacementOfficerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlacementOfficerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlacementOfficerCountAggregateInputType | true
    }

  export interface PlacementOfficerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlacementOfficer'], meta: { name: 'PlacementOfficer' } }
    /**
     * Find zero or one PlacementOfficer that matches the filter.
     * @param {PlacementOfficerFindUniqueArgs} args - Arguments to find a PlacementOfficer
     * @example
     * // Get one PlacementOfficer
     * const placementOfficer = await prisma.placementOfficer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlacementOfficerFindUniqueArgs>(args: SelectSubset<T, PlacementOfficerFindUniqueArgs<ExtArgs>>): Prisma__PlacementOfficerClient<$Result.GetResult<Prisma.$PlacementOfficerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlacementOfficer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlacementOfficerFindUniqueOrThrowArgs} args - Arguments to find a PlacementOfficer
     * @example
     * // Get one PlacementOfficer
     * const placementOfficer = await prisma.placementOfficer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlacementOfficerFindUniqueOrThrowArgs>(args: SelectSubset<T, PlacementOfficerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlacementOfficerClient<$Result.GetResult<Prisma.$PlacementOfficerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlacementOfficer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementOfficerFindFirstArgs} args - Arguments to find a PlacementOfficer
     * @example
     * // Get one PlacementOfficer
     * const placementOfficer = await prisma.placementOfficer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlacementOfficerFindFirstArgs>(args?: SelectSubset<T, PlacementOfficerFindFirstArgs<ExtArgs>>): Prisma__PlacementOfficerClient<$Result.GetResult<Prisma.$PlacementOfficerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlacementOfficer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementOfficerFindFirstOrThrowArgs} args - Arguments to find a PlacementOfficer
     * @example
     * // Get one PlacementOfficer
     * const placementOfficer = await prisma.placementOfficer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlacementOfficerFindFirstOrThrowArgs>(args?: SelectSubset<T, PlacementOfficerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlacementOfficerClient<$Result.GetResult<Prisma.$PlacementOfficerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlacementOfficers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementOfficerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlacementOfficers
     * const placementOfficers = await prisma.placementOfficer.findMany()
     * 
     * // Get first 10 PlacementOfficers
     * const placementOfficers = await prisma.placementOfficer.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const placementOfficerWithUserIdOnly = await prisma.placementOfficer.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends PlacementOfficerFindManyArgs>(args?: SelectSubset<T, PlacementOfficerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacementOfficerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlacementOfficer.
     * @param {PlacementOfficerCreateArgs} args - Arguments to create a PlacementOfficer.
     * @example
     * // Create one PlacementOfficer
     * const PlacementOfficer = await prisma.placementOfficer.create({
     *   data: {
     *     // ... data to create a PlacementOfficer
     *   }
     * })
     * 
     */
    create<T extends PlacementOfficerCreateArgs>(args: SelectSubset<T, PlacementOfficerCreateArgs<ExtArgs>>): Prisma__PlacementOfficerClient<$Result.GetResult<Prisma.$PlacementOfficerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlacementOfficers.
     * @param {PlacementOfficerCreateManyArgs} args - Arguments to create many PlacementOfficers.
     * @example
     * // Create many PlacementOfficers
     * const placementOfficer = await prisma.placementOfficer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlacementOfficerCreateManyArgs>(args?: SelectSubset<T, PlacementOfficerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlacementOfficers and returns the data saved in the database.
     * @param {PlacementOfficerCreateManyAndReturnArgs} args - Arguments to create many PlacementOfficers.
     * @example
     * // Create many PlacementOfficers
     * const placementOfficer = await prisma.placementOfficer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlacementOfficers and only return the `userId`
     * const placementOfficerWithUserIdOnly = await prisma.placementOfficer.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlacementOfficerCreateManyAndReturnArgs>(args?: SelectSubset<T, PlacementOfficerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacementOfficerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlacementOfficer.
     * @param {PlacementOfficerDeleteArgs} args - Arguments to delete one PlacementOfficer.
     * @example
     * // Delete one PlacementOfficer
     * const PlacementOfficer = await prisma.placementOfficer.delete({
     *   where: {
     *     // ... filter to delete one PlacementOfficer
     *   }
     * })
     * 
     */
    delete<T extends PlacementOfficerDeleteArgs>(args: SelectSubset<T, PlacementOfficerDeleteArgs<ExtArgs>>): Prisma__PlacementOfficerClient<$Result.GetResult<Prisma.$PlacementOfficerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlacementOfficer.
     * @param {PlacementOfficerUpdateArgs} args - Arguments to update one PlacementOfficer.
     * @example
     * // Update one PlacementOfficer
     * const placementOfficer = await prisma.placementOfficer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlacementOfficerUpdateArgs>(args: SelectSubset<T, PlacementOfficerUpdateArgs<ExtArgs>>): Prisma__PlacementOfficerClient<$Result.GetResult<Prisma.$PlacementOfficerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlacementOfficers.
     * @param {PlacementOfficerDeleteManyArgs} args - Arguments to filter PlacementOfficers to delete.
     * @example
     * // Delete a few PlacementOfficers
     * const { count } = await prisma.placementOfficer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlacementOfficerDeleteManyArgs>(args?: SelectSubset<T, PlacementOfficerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlacementOfficers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementOfficerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlacementOfficers
     * const placementOfficer = await prisma.placementOfficer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlacementOfficerUpdateManyArgs>(args: SelectSubset<T, PlacementOfficerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlacementOfficers and returns the data updated in the database.
     * @param {PlacementOfficerUpdateManyAndReturnArgs} args - Arguments to update many PlacementOfficers.
     * @example
     * // Update many PlacementOfficers
     * const placementOfficer = await prisma.placementOfficer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlacementOfficers and only return the `userId`
     * const placementOfficerWithUserIdOnly = await prisma.placementOfficer.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlacementOfficerUpdateManyAndReturnArgs>(args: SelectSubset<T, PlacementOfficerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacementOfficerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlacementOfficer.
     * @param {PlacementOfficerUpsertArgs} args - Arguments to update or create a PlacementOfficer.
     * @example
     * // Update or create a PlacementOfficer
     * const placementOfficer = await prisma.placementOfficer.upsert({
     *   create: {
     *     // ... data to create a PlacementOfficer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlacementOfficer we want to update
     *   }
     * })
     */
    upsert<T extends PlacementOfficerUpsertArgs>(args: SelectSubset<T, PlacementOfficerUpsertArgs<ExtArgs>>): Prisma__PlacementOfficerClient<$Result.GetResult<Prisma.$PlacementOfficerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlacementOfficers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementOfficerCountArgs} args - Arguments to filter PlacementOfficers to count.
     * @example
     * // Count the number of PlacementOfficers
     * const count = await prisma.placementOfficer.count({
     *   where: {
     *     // ... the filter for the PlacementOfficers we want to count
     *   }
     * })
    **/
    count<T extends PlacementOfficerCountArgs>(
      args?: Subset<T, PlacementOfficerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlacementOfficerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlacementOfficer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementOfficerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlacementOfficerAggregateArgs>(args: Subset<T, PlacementOfficerAggregateArgs>): Prisma.PrismaPromise<GetPlacementOfficerAggregateType<T>>

    /**
     * Group by PlacementOfficer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementOfficerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlacementOfficerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlacementOfficerGroupByArgs['orderBy'] }
        : { orderBy?: PlacementOfficerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlacementOfficerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlacementOfficerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlacementOfficer model
   */
  readonly fields: PlacementOfficerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlacementOfficer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlacementOfficerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    internships<T extends PlacementOfficer$internshipsArgs<ExtArgs> = {}>(args?: Subset<T, PlacementOfficer$internshipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlacementOfficer model
   */
  interface PlacementOfficerFieldRefs {
    readonly userId: FieldRef<"PlacementOfficer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PlacementOfficer findUnique
   */
  export type PlacementOfficerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementOfficer
     */
    select?: PlacementOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementOfficer
     */
    omit?: PlacementOfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementOfficerInclude<ExtArgs> | null
    /**
     * Filter, which PlacementOfficer to fetch.
     */
    where: PlacementOfficerWhereUniqueInput
  }

  /**
   * PlacementOfficer findUniqueOrThrow
   */
  export type PlacementOfficerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementOfficer
     */
    select?: PlacementOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementOfficer
     */
    omit?: PlacementOfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementOfficerInclude<ExtArgs> | null
    /**
     * Filter, which PlacementOfficer to fetch.
     */
    where: PlacementOfficerWhereUniqueInput
  }

  /**
   * PlacementOfficer findFirst
   */
  export type PlacementOfficerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementOfficer
     */
    select?: PlacementOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementOfficer
     */
    omit?: PlacementOfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementOfficerInclude<ExtArgs> | null
    /**
     * Filter, which PlacementOfficer to fetch.
     */
    where?: PlacementOfficerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlacementOfficers to fetch.
     */
    orderBy?: PlacementOfficerOrderByWithRelationInput | PlacementOfficerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlacementOfficers.
     */
    cursor?: PlacementOfficerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlacementOfficers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlacementOfficers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlacementOfficers.
     */
    distinct?: PlacementOfficerScalarFieldEnum | PlacementOfficerScalarFieldEnum[]
  }

  /**
   * PlacementOfficer findFirstOrThrow
   */
  export type PlacementOfficerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementOfficer
     */
    select?: PlacementOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementOfficer
     */
    omit?: PlacementOfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementOfficerInclude<ExtArgs> | null
    /**
     * Filter, which PlacementOfficer to fetch.
     */
    where?: PlacementOfficerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlacementOfficers to fetch.
     */
    orderBy?: PlacementOfficerOrderByWithRelationInput | PlacementOfficerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlacementOfficers.
     */
    cursor?: PlacementOfficerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlacementOfficers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlacementOfficers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlacementOfficers.
     */
    distinct?: PlacementOfficerScalarFieldEnum | PlacementOfficerScalarFieldEnum[]
  }

  /**
   * PlacementOfficer findMany
   */
  export type PlacementOfficerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementOfficer
     */
    select?: PlacementOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementOfficer
     */
    omit?: PlacementOfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementOfficerInclude<ExtArgs> | null
    /**
     * Filter, which PlacementOfficers to fetch.
     */
    where?: PlacementOfficerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlacementOfficers to fetch.
     */
    orderBy?: PlacementOfficerOrderByWithRelationInput | PlacementOfficerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlacementOfficers.
     */
    cursor?: PlacementOfficerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlacementOfficers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlacementOfficers.
     */
    skip?: number
    distinct?: PlacementOfficerScalarFieldEnum | PlacementOfficerScalarFieldEnum[]
  }

  /**
   * PlacementOfficer create
   */
  export type PlacementOfficerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementOfficer
     */
    select?: PlacementOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementOfficer
     */
    omit?: PlacementOfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementOfficerInclude<ExtArgs> | null
    /**
     * The data needed to create a PlacementOfficer.
     */
    data: XOR<PlacementOfficerCreateInput, PlacementOfficerUncheckedCreateInput>
  }

  /**
   * PlacementOfficer createMany
   */
  export type PlacementOfficerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlacementOfficers.
     */
    data: PlacementOfficerCreateManyInput | PlacementOfficerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlacementOfficer createManyAndReturn
   */
  export type PlacementOfficerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementOfficer
     */
    select?: PlacementOfficerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementOfficer
     */
    omit?: PlacementOfficerOmit<ExtArgs> | null
    /**
     * The data used to create many PlacementOfficers.
     */
    data: PlacementOfficerCreateManyInput | PlacementOfficerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementOfficerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlacementOfficer update
   */
  export type PlacementOfficerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementOfficer
     */
    select?: PlacementOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementOfficer
     */
    omit?: PlacementOfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementOfficerInclude<ExtArgs> | null
    /**
     * The data needed to update a PlacementOfficer.
     */
    data: XOR<PlacementOfficerUpdateInput, PlacementOfficerUncheckedUpdateInput>
    /**
     * Choose, which PlacementOfficer to update.
     */
    where: PlacementOfficerWhereUniqueInput
  }

  /**
   * PlacementOfficer updateMany
   */
  export type PlacementOfficerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlacementOfficers.
     */
    data: XOR<PlacementOfficerUpdateManyMutationInput, PlacementOfficerUncheckedUpdateManyInput>
    /**
     * Filter which PlacementOfficers to update
     */
    where?: PlacementOfficerWhereInput
    /**
     * Limit how many PlacementOfficers to update.
     */
    limit?: number
  }

  /**
   * PlacementOfficer updateManyAndReturn
   */
  export type PlacementOfficerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementOfficer
     */
    select?: PlacementOfficerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementOfficer
     */
    omit?: PlacementOfficerOmit<ExtArgs> | null
    /**
     * The data used to update PlacementOfficers.
     */
    data: XOR<PlacementOfficerUpdateManyMutationInput, PlacementOfficerUncheckedUpdateManyInput>
    /**
     * Filter which PlacementOfficers to update
     */
    where?: PlacementOfficerWhereInput
    /**
     * Limit how many PlacementOfficers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementOfficerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlacementOfficer upsert
   */
  export type PlacementOfficerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementOfficer
     */
    select?: PlacementOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementOfficer
     */
    omit?: PlacementOfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementOfficerInclude<ExtArgs> | null
    /**
     * The filter to search for the PlacementOfficer to update in case it exists.
     */
    where: PlacementOfficerWhereUniqueInput
    /**
     * In case the PlacementOfficer found by the `where` argument doesn't exist, create a new PlacementOfficer with this data.
     */
    create: XOR<PlacementOfficerCreateInput, PlacementOfficerUncheckedCreateInput>
    /**
     * In case the PlacementOfficer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlacementOfficerUpdateInput, PlacementOfficerUncheckedUpdateInput>
  }

  /**
   * PlacementOfficer delete
   */
  export type PlacementOfficerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementOfficer
     */
    select?: PlacementOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementOfficer
     */
    omit?: PlacementOfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementOfficerInclude<ExtArgs> | null
    /**
     * Filter which PlacementOfficer to delete.
     */
    where: PlacementOfficerWhereUniqueInput
  }

  /**
   * PlacementOfficer deleteMany
   */
  export type PlacementOfficerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlacementOfficers to delete
     */
    where?: PlacementOfficerWhereInput
    /**
     * Limit how many PlacementOfficers to delete.
     */
    limit?: number
  }

  /**
   * PlacementOfficer.internships
   */
  export type PlacementOfficer$internshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internship
     */
    select?: InternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internship
     */
    omit?: InternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipInclude<ExtArgs> | null
    where?: InternshipWhereInput
    orderBy?: InternshipOrderByWithRelationInput | InternshipOrderByWithRelationInput[]
    cursor?: InternshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InternshipScalarFieldEnum | InternshipScalarFieldEnum[]
  }

  /**
   * PlacementOfficer without action
   */
  export type PlacementOfficerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementOfficer
     */
    select?: PlacementOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementOfficer
     */
    omit?: PlacementOfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementOfficerInclude<ExtArgs> | null
  }


  /**
   * Model Internship
   */

  export type AggregateInternship = {
    _count: InternshipCountAggregateOutputType | null
    _avg: InternshipAvgAggregateOutputType | null
    _sum: InternshipSumAggregateOutputType | null
    _min: InternshipMinAggregateOutputType | null
    _max: InternshipMaxAggregateOutputType | null
  }

  export type InternshipAvgAggregateOutputType = {
    minCgpa: Decimal | null
  }

  export type InternshipSumAggregateOutputType = {
    minCgpa: Decimal | null
  }

  export type InternshipMinAggregateOutputType = {
    id: string | null
    title: string | null
    companyName: string | null
    companyUrl: string | null
    companyLogo: string | null
    description: string | null
    location: string | null
    mode: $Enums.Mode | null
    duration: string | null
    applicationDeadline: Date | null
    requirement: string | null
    salaryPackage: string | null
    minCgpa: Decimal | null
    status: $Enums.InternshipStatus | null
    createdAt: Date | null
    postedById: string | null
  }

  export type InternshipMaxAggregateOutputType = {
    id: string | null
    title: string | null
    companyName: string | null
    companyUrl: string | null
    companyLogo: string | null
    description: string | null
    location: string | null
    mode: $Enums.Mode | null
    duration: string | null
    applicationDeadline: Date | null
    requirement: string | null
    salaryPackage: string | null
    minCgpa: Decimal | null
    status: $Enums.InternshipStatus | null
    createdAt: Date | null
    postedById: string | null
  }

  export type InternshipCountAggregateOutputType = {
    id: number
    title: number
    companyName: number
    companyUrl: number
    companyLogo: number
    description: number
    location: number
    mode: number
    duration: number
    applicationDeadline: number
    requirement: number
    salaryPackage: number
    minCgpa: number
    status: number
    createdAt: number
    postedById: number
    _all: number
  }


  export type InternshipAvgAggregateInputType = {
    minCgpa?: true
  }

  export type InternshipSumAggregateInputType = {
    minCgpa?: true
  }

  export type InternshipMinAggregateInputType = {
    id?: true
    title?: true
    companyName?: true
    companyUrl?: true
    companyLogo?: true
    description?: true
    location?: true
    mode?: true
    duration?: true
    applicationDeadline?: true
    requirement?: true
    salaryPackage?: true
    minCgpa?: true
    status?: true
    createdAt?: true
    postedById?: true
  }

  export type InternshipMaxAggregateInputType = {
    id?: true
    title?: true
    companyName?: true
    companyUrl?: true
    companyLogo?: true
    description?: true
    location?: true
    mode?: true
    duration?: true
    applicationDeadline?: true
    requirement?: true
    salaryPackage?: true
    minCgpa?: true
    status?: true
    createdAt?: true
    postedById?: true
  }

  export type InternshipCountAggregateInputType = {
    id?: true
    title?: true
    companyName?: true
    companyUrl?: true
    companyLogo?: true
    description?: true
    location?: true
    mode?: true
    duration?: true
    applicationDeadline?: true
    requirement?: true
    salaryPackage?: true
    minCgpa?: true
    status?: true
    createdAt?: true
    postedById?: true
    _all?: true
  }

  export type InternshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Internship to aggregate.
     */
    where?: InternshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Internships to fetch.
     */
    orderBy?: InternshipOrderByWithRelationInput | InternshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InternshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Internships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Internships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Internships
    **/
    _count?: true | InternshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InternshipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InternshipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InternshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InternshipMaxAggregateInputType
  }

  export type GetInternshipAggregateType<T extends InternshipAggregateArgs> = {
        [P in keyof T & keyof AggregateInternship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInternship[P]>
      : GetScalarType<T[P], AggregateInternship[P]>
  }




  export type InternshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InternshipWhereInput
    orderBy?: InternshipOrderByWithAggregationInput | InternshipOrderByWithAggregationInput[]
    by: InternshipScalarFieldEnum[] | InternshipScalarFieldEnum
    having?: InternshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InternshipCountAggregateInputType | true
    _avg?: InternshipAvgAggregateInputType
    _sum?: InternshipSumAggregateInputType
    _min?: InternshipMinAggregateInputType
    _max?: InternshipMaxAggregateInputType
  }

  export type InternshipGroupByOutputType = {
    id: string
    title: string
    companyName: string | null
    companyUrl: string | null
    companyLogo: string | null
    description: string | null
    location: string | null
    mode: $Enums.Mode
    duration: string
    applicationDeadline: Date | null
    requirement: string
    salaryPackage: string | null
    minCgpa: Decimal | null
    status: $Enums.InternshipStatus
    createdAt: Date
    postedById: string
    _count: InternshipCountAggregateOutputType | null
    _avg: InternshipAvgAggregateOutputType | null
    _sum: InternshipSumAggregateOutputType | null
    _min: InternshipMinAggregateOutputType | null
    _max: InternshipMaxAggregateOutputType | null
  }

  type GetInternshipGroupByPayload<T extends InternshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InternshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InternshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InternshipGroupByOutputType[P]>
            : GetScalarType<T[P], InternshipGroupByOutputType[P]>
        }
      >
    >


  export type InternshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    companyName?: boolean
    companyUrl?: boolean
    companyLogo?: boolean
    description?: boolean
    location?: boolean
    mode?: boolean
    duration?: boolean
    applicationDeadline?: boolean
    requirement?: boolean
    salaryPackage?: boolean
    minCgpa?: boolean
    status?: boolean
    createdAt?: boolean
    postedById?: boolean
    skills?: boolean | Internship$skillsArgs<ExtArgs>
    postedBy?: boolean | PlacementOfficerDefaultArgs<ExtArgs>
    savedBy?: boolean | Internship$savedByArgs<ExtArgs>
    applicants?: boolean | Internship$applicantsArgs<ExtArgs>
    _count?: boolean | InternshipCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["internship"]>

  export type InternshipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    companyName?: boolean
    companyUrl?: boolean
    companyLogo?: boolean
    description?: boolean
    location?: boolean
    mode?: boolean
    duration?: boolean
    applicationDeadline?: boolean
    requirement?: boolean
    salaryPackage?: boolean
    minCgpa?: boolean
    status?: boolean
    createdAt?: boolean
    postedById?: boolean
    postedBy?: boolean | PlacementOfficerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["internship"]>

  export type InternshipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    companyName?: boolean
    companyUrl?: boolean
    companyLogo?: boolean
    description?: boolean
    location?: boolean
    mode?: boolean
    duration?: boolean
    applicationDeadline?: boolean
    requirement?: boolean
    salaryPackage?: boolean
    minCgpa?: boolean
    status?: boolean
    createdAt?: boolean
    postedById?: boolean
    postedBy?: boolean | PlacementOfficerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["internship"]>

  export type InternshipSelectScalar = {
    id?: boolean
    title?: boolean
    companyName?: boolean
    companyUrl?: boolean
    companyLogo?: boolean
    description?: boolean
    location?: boolean
    mode?: boolean
    duration?: boolean
    applicationDeadline?: boolean
    requirement?: boolean
    salaryPackage?: boolean
    minCgpa?: boolean
    status?: boolean
    createdAt?: boolean
    postedById?: boolean
  }

  export type InternshipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "companyName" | "companyUrl" | "companyLogo" | "description" | "location" | "mode" | "duration" | "applicationDeadline" | "requirement" | "salaryPackage" | "minCgpa" | "status" | "createdAt" | "postedById", ExtArgs["result"]["internship"]>
  export type InternshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | Internship$skillsArgs<ExtArgs>
    postedBy?: boolean | PlacementOfficerDefaultArgs<ExtArgs>
    savedBy?: boolean | Internship$savedByArgs<ExtArgs>
    applicants?: boolean | Internship$applicantsArgs<ExtArgs>
    _count?: boolean | InternshipCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InternshipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postedBy?: boolean | PlacementOfficerDefaultArgs<ExtArgs>
  }
  export type InternshipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postedBy?: boolean | PlacementOfficerDefaultArgs<ExtArgs>
  }

  export type $InternshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Internship"
    objects: {
      skills: Prisma.$InternshipSkillPayload<ExtArgs>[]
      postedBy: Prisma.$PlacementOfficerPayload<ExtArgs>
      savedBy: Prisma.$SavedInternshipPayload<ExtArgs>[]
      applicants: Prisma.$StudentInternshipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      companyName: string | null
      companyUrl: string | null
      companyLogo: string | null
      description: string | null
      location: string | null
      mode: $Enums.Mode
      duration: string
      applicationDeadline: Date | null
      requirement: string
      salaryPackage: string | null
      minCgpa: Prisma.Decimal | null
      status: $Enums.InternshipStatus
      createdAt: Date
      postedById: string
    }, ExtArgs["result"]["internship"]>
    composites: {}
  }

  type InternshipGetPayload<S extends boolean | null | undefined | InternshipDefaultArgs> = $Result.GetResult<Prisma.$InternshipPayload, S>

  type InternshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InternshipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InternshipCountAggregateInputType | true
    }

  export interface InternshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Internship'], meta: { name: 'Internship' } }
    /**
     * Find zero or one Internship that matches the filter.
     * @param {InternshipFindUniqueArgs} args - Arguments to find a Internship
     * @example
     * // Get one Internship
     * const internship = await prisma.internship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InternshipFindUniqueArgs>(args: SelectSubset<T, InternshipFindUniqueArgs<ExtArgs>>): Prisma__InternshipClient<$Result.GetResult<Prisma.$InternshipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Internship that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InternshipFindUniqueOrThrowArgs} args - Arguments to find a Internship
     * @example
     * // Get one Internship
     * const internship = await prisma.internship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InternshipFindUniqueOrThrowArgs>(args: SelectSubset<T, InternshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InternshipClient<$Result.GetResult<Prisma.$InternshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Internship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipFindFirstArgs} args - Arguments to find a Internship
     * @example
     * // Get one Internship
     * const internship = await prisma.internship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InternshipFindFirstArgs>(args?: SelectSubset<T, InternshipFindFirstArgs<ExtArgs>>): Prisma__InternshipClient<$Result.GetResult<Prisma.$InternshipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Internship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipFindFirstOrThrowArgs} args - Arguments to find a Internship
     * @example
     * // Get one Internship
     * const internship = await prisma.internship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InternshipFindFirstOrThrowArgs>(args?: SelectSubset<T, InternshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__InternshipClient<$Result.GetResult<Prisma.$InternshipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Internships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Internships
     * const internships = await prisma.internship.findMany()
     * 
     * // Get first 10 Internships
     * const internships = await prisma.internship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const internshipWithIdOnly = await prisma.internship.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InternshipFindManyArgs>(args?: SelectSubset<T, InternshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Internship.
     * @param {InternshipCreateArgs} args - Arguments to create a Internship.
     * @example
     * // Create one Internship
     * const Internship = await prisma.internship.create({
     *   data: {
     *     // ... data to create a Internship
     *   }
     * })
     * 
     */
    create<T extends InternshipCreateArgs>(args: SelectSubset<T, InternshipCreateArgs<ExtArgs>>): Prisma__InternshipClient<$Result.GetResult<Prisma.$InternshipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Internships.
     * @param {InternshipCreateManyArgs} args - Arguments to create many Internships.
     * @example
     * // Create many Internships
     * const internship = await prisma.internship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InternshipCreateManyArgs>(args?: SelectSubset<T, InternshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Internships and returns the data saved in the database.
     * @param {InternshipCreateManyAndReturnArgs} args - Arguments to create many Internships.
     * @example
     * // Create many Internships
     * const internship = await prisma.internship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Internships and only return the `id`
     * const internshipWithIdOnly = await prisma.internship.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InternshipCreateManyAndReturnArgs>(args?: SelectSubset<T, InternshipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternshipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Internship.
     * @param {InternshipDeleteArgs} args - Arguments to delete one Internship.
     * @example
     * // Delete one Internship
     * const Internship = await prisma.internship.delete({
     *   where: {
     *     // ... filter to delete one Internship
     *   }
     * })
     * 
     */
    delete<T extends InternshipDeleteArgs>(args: SelectSubset<T, InternshipDeleteArgs<ExtArgs>>): Prisma__InternshipClient<$Result.GetResult<Prisma.$InternshipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Internship.
     * @param {InternshipUpdateArgs} args - Arguments to update one Internship.
     * @example
     * // Update one Internship
     * const internship = await prisma.internship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InternshipUpdateArgs>(args: SelectSubset<T, InternshipUpdateArgs<ExtArgs>>): Prisma__InternshipClient<$Result.GetResult<Prisma.$InternshipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Internships.
     * @param {InternshipDeleteManyArgs} args - Arguments to filter Internships to delete.
     * @example
     * // Delete a few Internships
     * const { count } = await prisma.internship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InternshipDeleteManyArgs>(args?: SelectSubset<T, InternshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Internships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Internships
     * const internship = await prisma.internship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InternshipUpdateManyArgs>(args: SelectSubset<T, InternshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Internships and returns the data updated in the database.
     * @param {InternshipUpdateManyAndReturnArgs} args - Arguments to update many Internships.
     * @example
     * // Update many Internships
     * const internship = await prisma.internship.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Internships and only return the `id`
     * const internshipWithIdOnly = await prisma.internship.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InternshipUpdateManyAndReturnArgs>(args: SelectSubset<T, InternshipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternshipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Internship.
     * @param {InternshipUpsertArgs} args - Arguments to update or create a Internship.
     * @example
     * // Update or create a Internship
     * const internship = await prisma.internship.upsert({
     *   create: {
     *     // ... data to create a Internship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Internship we want to update
     *   }
     * })
     */
    upsert<T extends InternshipUpsertArgs>(args: SelectSubset<T, InternshipUpsertArgs<ExtArgs>>): Prisma__InternshipClient<$Result.GetResult<Prisma.$InternshipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Internships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipCountArgs} args - Arguments to filter Internships to count.
     * @example
     * // Count the number of Internships
     * const count = await prisma.internship.count({
     *   where: {
     *     // ... the filter for the Internships we want to count
     *   }
     * })
    **/
    count<T extends InternshipCountArgs>(
      args?: Subset<T, InternshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InternshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Internship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InternshipAggregateArgs>(args: Subset<T, InternshipAggregateArgs>): Prisma.PrismaPromise<GetInternshipAggregateType<T>>

    /**
     * Group by Internship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InternshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InternshipGroupByArgs['orderBy'] }
        : { orderBy?: InternshipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InternshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInternshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Internship model
   */
  readonly fields: InternshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Internship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InternshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skills<T extends Internship$skillsArgs<ExtArgs> = {}>(args?: Subset<T, Internship$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternshipSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postedBy<T extends PlacementOfficerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlacementOfficerDefaultArgs<ExtArgs>>): Prisma__PlacementOfficerClient<$Result.GetResult<Prisma.$PlacementOfficerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    savedBy<T extends Internship$savedByArgs<ExtArgs> = {}>(args?: Subset<T, Internship$savedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedInternshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applicants<T extends Internship$applicantsArgs<ExtArgs> = {}>(args?: Subset<T, Internship$applicantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentInternshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Internship model
   */
  interface InternshipFieldRefs {
    readonly id: FieldRef<"Internship", 'String'>
    readonly title: FieldRef<"Internship", 'String'>
    readonly companyName: FieldRef<"Internship", 'String'>
    readonly companyUrl: FieldRef<"Internship", 'String'>
    readonly companyLogo: FieldRef<"Internship", 'String'>
    readonly description: FieldRef<"Internship", 'String'>
    readonly location: FieldRef<"Internship", 'String'>
    readonly mode: FieldRef<"Internship", 'Mode'>
    readonly duration: FieldRef<"Internship", 'String'>
    readonly applicationDeadline: FieldRef<"Internship", 'DateTime'>
    readonly requirement: FieldRef<"Internship", 'String'>
    readonly salaryPackage: FieldRef<"Internship", 'String'>
    readonly minCgpa: FieldRef<"Internship", 'Decimal'>
    readonly status: FieldRef<"Internship", 'InternshipStatus'>
    readonly createdAt: FieldRef<"Internship", 'DateTime'>
    readonly postedById: FieldRef<"Internship", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Internship findUnique
   */
  export type InternshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internship
     */
    select?: InternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internship
     */
    omit?: InternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipInclude<ExtArgs> | null
    /**
     * Filter, which Internship to fetch.
     */
    where: InternshipWhereUniqueInput
  }

  /**
   * Internship findUniqueOrThrow
   */
  export type InternshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internship
     */
    select?: InternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internship
     */
    omit?: InternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipInclude<ExtArgs> | null
    /**
     * Filter, which Internship to fetch.
     */
    where: InternshipWhereUniqueInput
  }

  /**
   * Internship findFirst
   */
  export type InternshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internship
     */
    select?: InternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internship
     */
    omit?: InternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipInclude<ExtArgs> | null
    /**
     * Filter, which Internship to fetch.
     */
    where?: InternshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Internships to fetch.
     */
    orderBy?: InternshipOrderByWithRelationInput | InternshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Internships.
     */
    cursor?: InternshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Internships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Internships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Internships.
     */
    distinct?: InternshipScalarFieldEnum | InternshipScalarFieldEnum[]
  }

  /**
   * Internship findFirstOrThrow
   */
  export type InternshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internship
     */
    select?: InternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internship
     */
    omit?: InternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipInclude<ExtArgs> | null
    /**
     * Filter, which Internship to fetch.
     */
    where?: InternshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Internships to fetch.
     */
    orderBy?: InternshipOrderByWithRelationInput | InternshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Internships.
     */
    cursor?: InternshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Internships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Internships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Internships.
     */
    distinct?: InternshipScalarFieldEnum | InternshipScalarFieldEnum[]
  }

  /**
   * Internship findMany
   */
  export type InternshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internship
     */
    select?: InternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internship
     */
    omit?: InternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipInclude<ExtArgs> | null
    /**
     * Filter, which Internships to fetch.
     */
    where?: InternshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Internships to fetch.
     */
    orderBy?: InternshipOrderByWithRelationInput | InternshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Internships.
     */
    cursor?: InternshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Internships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Internships.
     */
    skip?: number
    distinct?: InternshipScalarFieldEnum | InternshipScalarFieldEnum[]
  }

  /**
   * Internship create
   */
  export type InternshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internship
     */
    select?: InternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internship
     */
    omit?: InternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipInclude<ExtArgs> | null
    /**
     * The data needed to create a Internship.
     */
    data: XOR<InternshipCreateInput, InternshipUncheckedCreateInput>
  }

  /**
   * Internship createMany
   */
  export type InternshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Internships.
     */
    data: InternshipCreateManyInput | InternshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Internship createManyAndReturn
   */
  export type InternshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internship
     */
    select?: InternshipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Internship
     */
    omit?: InternshipOmit<ExtArgs> | null
    /**
     * The data used to create many Internships.
     */
    data: InternshipCreateManyInput | InternshipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Internship update
   */
  export type InternshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internship
     */
    select?: InternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internship
     */
    omit?: InternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipInclude<ExtArgs> | null
    /**
     * The data needed to update a Internship.
     */
    data: XOR<InternshipUpdateInput, InternshipUncheckedUpdateInput>
    /**
     * Choose, which Internship to update.
     */
    where: InternshipWhereUniqueInput
  }

  /**
   * Internship updateMany
   */
  export type InternshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Internships.
     */
    data: XOR<InternshipUpdateManyMutationInput, InternshipUncheckedUpdateManyInput>
    /**
     * Filter which Internships to update
     */
    where?: InternshipWhereInput
    /**
     * Limit how many Internships to update.
     */
    limit?: number
  }

  /**
   * Internship updateManyAndReturn
   */
  export type InternshipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internship
     */
    select?: InternshipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Internship
     */
    omit?: InternshipOmit<ExtArgs> | null
    /**
     * The data used to update Internships.
     */
    data: XOR<InternshipUpdateManyMutationInput, InternshipUncheckedUpdateManyInput>
    /**
     * Filter which Internships to update
     */
    where?: InternshipWhereInput
    /**
     * Limit how many Internships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Internship upsert
   */
  export type InternshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internship
     */
    select?: InternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internship
     */
    omit?: InternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipInclude<ExtArgs> | null
    /**
     * The filter to search for the Internship to update in case it exists.
     */
    where: InternshipWhereUniqueInput
    /**
     * In case the Internship found by the `where` argument doesn't exist, create a new Internship with this data.
     */
    create: XOR<InternshipCreateInput, InternshipUncheckedCreateInput>
    /**
     * In case the Internship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InternshipUpdateInput, InternshipUncheckedUpdateInput>
  }

  /**
   * Internship delete
   */
  export type InternshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internship
     */
    select?: InternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internship
     */
    omit?: InternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipInclude<ExtArgs> | null
    /**
     * Filter which Internship to delete.
     */
    where: InternshipWhereUniqueInput
  }

  /**
   * Internship deleteMany
   */
  export type InternshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Internships to delete
     */
    where?: InternshipWhereInput
    /**
     * Limit how many Internships to delete.
     */
    limit?: number
  }

  /**
   * Internship.skills
   */
  export type Internship$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternshipSkill
     */
    select?: InternshipSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternshipSkill
     */
    omit?: InternshipSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipSkillInclude<ExtArgs> | null
    where?: InternshipSkillWhereInput
    orderBy?: InternshipSkillOrderByWithRelationInput | InternshipSkillOrderByWithRelationInput[]
    cursor?: InternshipSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InternshipSkillScalarFieldEnum | InternshipSkillScalarFieldEnum[]
  }

  /**
   * Internship.savedBy
   */
  export type Internship$savedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedInternship
     */
    select?: SavedInternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedInternship
     */
    omit?: SavedInternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedInternshipInclude<ExtArgs> | null
    where?: SavedInternshipWhereInput
    orderBy?: SavedInternshipOrderByWithRelationInput | SavedInternshipOrderByWithRelationInput[]
    cursor?: SavedInternshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedInternshipScalarFieldEnum | SavedInternshipScalarFieldEnum[]
  }

  /**
   * Internship.applicants
   */
  export type Internship$applicantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentInternship
     */
    select?: StudentInternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentInternship
     */
    omit?: StudentInternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInternshipInclude<ExtArgs> | null
    where?: StudentInternshipWhereInput
    orderBy?: StudentInternshipOrderByWithRelationInput | StudentInternshipOrderByWithRelationInput[]
    cursor?: StudentInternshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentInternshipScalarFieldEnum | StudentInternshipScalarFieldEnum[]
  }

  /**
   * Internship without action
   */
  export type InternshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internship
     */
    select?: InternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internship
     */
    omit?: InternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipInclude<ExtArgs> | null
  }


  /**
   * Model StudentInternship
   */

  export type AggregateStudentInternship = {
    _count: StudentInternshipCountAggregateOutputType | null
    _min: StudentInternshipMinAggregateOutputType | null
    _max: StudentInternshipMaxAggregateOutputType | null
  }

  export type StudentInternshipMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    internshipId: string | null
    status: $Enums.StudentInternshipStatus | null
    certificateUrl: string | null
    appliedAt: Date | null
  }

  export type StudentInternshipMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    internshipId: string | null
    status: $Enums.StudentInternshipStatus | null
    certificateUrl: string | null
    appliedAt: Date | null
  }

  export type StudentInternshipCountAggregateOutputType = {
    id: number
    studentId: number
    internshipId: number
    status: number
    certificateUrl: number
    appliedAt: number
    _all: number
  }


  export type StudentInternshipMinAggregateInputType = {
    id?: true
    studentId?: true
    internshipId?: true
    status?: true
    certificateUrl?: true
    appliedAt?: true
  }

  export type StudentInternshipMaxAggregateInputType = {
    id?: true
    studentId?: true
    internshipId?: true
    status?: true
    certificateUrl?: true
    appliedAt?: true
  }

  export type StudentInternshipCountAggregateInputType = {
    id?: true
    studentId?: true
    internshipId?: true
    status?: true
    certificateUrl?: true
    appliedAt?: true
    _all?: true
  }

  export type StudentInternshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentInternship to aggregate.
     */
    where?: StudentInternshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentInternships to fetch.
     */
    orderBy?: StudentInternshipOrderByWithRelationInput | StudentInternshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentInternshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentInternships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentInternships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentInternships
    **/
    _count?: true | StudentInternshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentInternshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentInternshipMaxAggregateInputType
  }

  export type GetStudentInternshipAggregateType<T extends StudentInternshipAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentInternship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentInternship[P]>
      : GetScalarType<T[P], AggregateStudentInternship[P]>
  }




  export type StudentInternshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentInternshipWhereInput
    orderBy?: StudentInternshipOrderByWithAggregationInput | StudentInternshipOrderByWithAggregationInput[]
    by: StudentInternshipScalarFieldEnum[] | StudentInternshipScalarFieldEnum
    having?: StudentInternshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentInternshipCountAggregateInputType | true
    _min?: StudentInternshipMinAggregateInputType
    _max?: StudentInternshipMaxAggregateInputType
  }

  export type StudentInternshipGroupByOutputType = {
    id: string
    studentId: string
    internshipId: string
    status: $Enums.StudentInternshipStatus
    certificateUrl: string | null
    appliedAt: Date
    _count: StudentInternshipCountAggregateOutputType | null
    _min: StudentInternshipMinAggregateOutputType | null
    _max: StudentInternshipMaxAggregateOutputType | null
  }

  type GetStudentInternshipGroupByPayload<T extends StudentInternshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentInternshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentInternshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentInternshipGroupByOutputType[P]>
            : GetScalarType<T[P], StudentInternshipGroupByOutputType[P]>
        }
      >
    >


  export type StudentInternshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    internshipId?: boolean
    status?: boolean
    certificateUrl?: boolean
    appliedAt?: boolean
    internship?: boolean | InternshipDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentInternship"]>

  export type StudentInternshipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    internshipId?: boolean
    status?: boolean
    certificateUrl?: boolean
    appliedAt?: boolean
    internship?: boolean | InternshipDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentInternship"]>

  export type StudentInternshipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    internshipId?: boolean
    status?: boolean
    certificateUrl?: boolean
    appliedAt?: boolean
    internship?: boolean | InternshipDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentInternship"]>

  export type StudentInternshipSelectScalar = {
    id?: boolean
    studentId?: boolean
    internshipId?: boolean
    status?: boolean
    certificateUrl?: boolean
    appliedAt?: boolean
  }

  export type StudentInternshipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "internshipId" | "status" | "certificateUrl" | "appliedAt", ExtArgs["result"]["studentInternship"]>
  export type StudentInternshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    internship?: boolean | InternshipDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type StudentInternshipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    internship?: boolean | InternshipDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type StudentInternshipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    internship?: boolean | InternshipDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $StudentInternshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentInternship"
    objects: {
      internship: Prisma.$InternshipPayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      internshipId: string
      status: $Enums.StudentInternshipStatus
      certificateUrl: string | null
      appliedAt: Date
    }, ExtArgs["result"]["studentInternship"]>
    composites: {}
  }

  type StudentInternshipGetPayload<S extends boolean | null | undefined | StudentInternshipDefaultArgs> = $Result.GetResult<Prisma.$StudentInternshipPayload, S>

  type StudentInternshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentInternshipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentInternshipCountAggregateInputType | true
    }

  export interface StudentInternshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentInternship'], meta: { name: 'StudentInternship' } }
    /**
     * Find zero or one StudentInternship that matches the filter.
     * @param {StudentInternshipFindUniqueArgs} args - Arguments to find a StudentInternship
     * @example
     * // Get one StudentInternship
     * const studentInternship = await prisma.studentInternship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentInternshipFindUniqueArgs>(args: SelectSubset<T, StudentInternshipFindUniqueArgs<ExtArgs>>): Prisma__StudentInternshipClient<$Result.GetResult<Prisma.$StudentInternshipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentInternship that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentInternshipFindUniqueOrThrowArgs} args - Arguments to find a StudentInternship
     * @example
     * // Get one StudentInternship
     * const studentInternship = await prisma.studentInternship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentInternshipFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentInternshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentInternshipClient<$Result.GetResult<Prisma.$StudentInternshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentInternship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentInternshipFindFirstArgs} args - Arguments to find a StudentInternship
     * @example
     * // Get one StudentInternship
     * const studentInternship = await prisma.studentInternship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentInternshipFindFirstArgs>(args?: SelectSubset<T, StudentInternshipFindFirstArgs<ExtArgs>>): Prisma__StudentInternshipClient<$Result.GetResult<Prisma.$StudentInternshipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentInternship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentInternshipFindFirstOrThrowArgs} args - Arguments to find a StudentInternship
     * @example
     * // Get one StudentInternship
     * const studentInternship = await prisma.studentInternship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentInternshipFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentInternshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentInternshipClient<$Result.GetResult<Prisma.$StudentInternshipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentInternships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentInternshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentInternships
     * const studentInternships = await prisma.studentInternship.findMany()
     * 
     * // Get first 10 StudentInternships
     * const studentInternships = await prisma.studentInternship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentInternshipWithIdOnly = await prisma.studentInternship.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentInternshipFindManyArgs>(args?: SelectSubset<T, StudentInternshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentInternshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentInternship.
     * @param {StudentInternshipCreateArgs} args - Arguments to create a StudentInternship.
     * @example
     * // Create one StudentInternship
     * const StudentInternship = await prisma.studentInternship.create({
     *   data: {
     *     // ... data to create a StudentInternship
     *   }
     * })
     * 
     */
    create<T extends StudentInternshipCreateArgs>(args: SelectSubset<T, StudentInternshipCreateArgs<ExtArgs>>): Prisma__StudentInternshipClient<$Result.GetResult<Prisma.$StudentInternshipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentInternships.
     * @param {StudentInternshipCreateManyArgs} args - Arguments to create many StudentInternships.
     * @example
     * // Create many StudentInternships
     * const studentInternship = await prisma.studentInternship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentInternshipCreateManyArgs>(args?: SelectSubset<T, StudentInternshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentInternships and returns the data saved in the database.
     * @param {StudentInternshipCreateManyAndReturnArgs} args - Arguments to create many StudentInternships.
     * @example
     * // Create many StudentInternships
     * const studentInternship = await prisma.studentInternship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentInternships and only return the `id`
     * const studentInternshipWithIdOnly = await prisma.studentInternship.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentInternshipCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentInternshipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentInternshipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentInternship.
     * @param {StudentInternshipDeleteArgs} args - Arguments to delete one StudentInternship.
     * @example
     * // Delete one StudentInternship
     * const StudentInternship = await prisma.studentInternship.delete({
     *   where: {
     *     // ... filter to delete one StudentInternship
     *   }
     * })
     * 
     */
    delete<T extends StudentInternshipDeleteArgs>(args: SelectSubset<T, StudentInternshipDeleteArgs<ExtArgs>>): Prisma__StudentInternshipClient<$Result.GetResult<Prisma.$StudentInternshipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentInternship.
     * @param {StudentInternshipUpdateArgs} args - Arguments to update one StudentInternship.
     * @example
     * // Update one StudentInternship
     * const studentInternship = await prisma.studentInternship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentInternshipUpdateArgs>(args: SelectSubset<T, StudentInternshipUpdateArgs<ExtArgs>>): Prisma__StudentInternshipClient<$Result.GetResult<Prisma.$StudentInternshipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentInternships.
     * @param {StudentInternshipDeleteManyArgs} args - Arguments to filter StudentInternships to delete.
     * @example
     * // Delete a few StudentInternships
     * const { count } = await prisma.studentInternship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentInternshipDeleteManyArgs>(args?: SelectSubset<T, StudentInternshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentInternships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentInternshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentInternships
     * const studentInternship = await prisma.studentInternship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentInternshipUpdateManyArgs>(args: SelectSubset<T, StudentInternshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentInternships and returns the data updated in the database.
     * @param {StudentInternshipUpdateManyAndReturnArgs} args - Arguments to update many StudentInternships.
     * @example
     * // Update many StudentInternships
     * const studentInternship = await prisma.studentInternship.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentInternships and only return the `id`
     * const studentInternshipWithIdOnly = await prisma.studentInternship.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentInternshipUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentInternshipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentInternshipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentInternship.
     * @param {StudentInternshipUpsertArgs} args - Arguments to update or create a StudentInternship.
     * @example
     * // Update or create a StudentInternship
     * const studentInternship = await prisma.studentInternship.upsert({
     *   create: {
     *     // ... data to create a StudentInternship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentInternship we want to update
     *   }
     * })
     */
    upsert<T extends StudentInternshipUpsertArgs>(args: SelectSubset<T, StudentInternshipUpsertArgs<ExtArgs>>): Prisma__StudentInternshipClient<$Result.GetResult<Prisma.$StudentInternshipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentInternships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentInternshipCountArgs} args - Arguments to filter StudentInternships to count.
     * @example
     * // Count the number of StudentInternships
     * const count = await prisma.studentInternship.count({
     *   where: {
     *     // ... the filter for the StudentInternships we want to count
     *   }
     * })
    **/
    count<T extends StudentInternshipCountArgs>(
      args?: Subset<T, StudentInternshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentInternshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentInternship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentInternshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentInternshipAggregateArgs>(args: Subset<T, StudentInternshipAggregateArgs>): Prisma.PrismaPromise<GetStudentInternshipAggregateType<T>>

    /**
     * Group by StudentInternship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentInternshipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentInternshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentInternshipGroupByArgs['orderBy'] }
        : { orderBy?: StudentInternshipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentInternshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentInternshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentInternship model
   */
  readonly fields: StudentInternshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentInternship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentInternshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    internship<T extends InternshipDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InternshipDefaultArgs<ExtArgs>>): Prisma__InternshipClient<$Result.GetResult<Prisma.$InternshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentInternship model
   */
  interface StudentInternshipFieldRefs {
    readonly id: FieldRef<"StudentInternship", 'String'>
    readonly studentId: FieldRef<"StudentInternship", 'String'>
    readonly internshipId: FieldRef<"StudentInternship", 'String'>
    readonly status: FieldRef<"StudentInternship", 'StudentInternshipStatus'>
    readonly certificateUrl: FieldRef<"StudentInternship", 'String'>
    readonly appliedAt: FieldRef<"StudentInternship", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentInternship findUnique
   */
  export type StudentInternshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentInternship
     */
    select?: StudentInternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentInternship
     */
    omit?: StudentInternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInternshipInclude<ExtArgs> | null
    /**
     * Filter, which StudentInternship to fetch.
     */
    where: StudentInternshipWhereUniqueInput
  }

  /**
   * StudentInternship findUniqueOrThrow
   */
  export type StudentInternshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentInternship
     */
    select?: StudentInternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentInternship
     */
    omit?: StudentInternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInternshipInclude<ExtArgs> | null
    /**
     * Filter, which StudentInternship to fetch.
     */
    where: StudentInternshipWhereUniqueInput
  }

  /**
   * StudentInternship findFirst
   */
  export type StudentInternshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentInternship
     */
    select?: StudentInternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentInternship
     */
    omit?: StudentInternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInternshipInclude<ExtArgs> | null
    /**
     * Filter, which StudentInternship to fetch.
     */
    where?: StudentInternshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentInternships to fetch.
     */
    orderBy?: StudentInternshipOrderByWithRelationInput | StudentInternshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentInternships.
     */
    cursor?: StudentInternshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentInternships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentInternships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentInternships.
     */
    distinct?: StudentInternshipScalarFieldEnum | StudentInternshipScalarFieldEnum[]
  }

  /**
   * StudentInternship findFirstOrThrow
   */
  export type StudentInternshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentInternship
     */
    select?: StudentInternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentInternship
     */
    omit?: StudentInternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInternshipInclude<ExtArgs> | null
    /**
     * Filter, which StudentInternship to fetch.
     */
    where?: StudentInternshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentInternships to fetch.
     */
    orderBy?: StudentInternshipOrderByWithRelationInput | StudentInternshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentInternships.
     */
    cursor?: StudentInternshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentInternships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentInternships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentInternships.
     */
    distinct?: StudentInternshipScalarFieldEnum | StudentInternshipScalarFieldEnum[]
  }

  /**
   * StudentInternship findMany
   */
  export type StudentInternshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentInternship
     */
    select?: StudentInternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentInternship
     */
    omit?: StudentInternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInternshipInclude<ExtArgs> | null
    /**
     * Filter, which StudentInternships to fetch.
     */
    where?: StudentInternshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentInternships to fetch.
     */
    orderBy?: StudentInternshipOrderByWithRelationInput | StudentInternshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentInternships.
     */
    cursor?: StudentInternshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentInternships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentInternships.
     */
    skip?: number
    distinct?: StudentInternshipScalarFieldEnum | StudentInternshipScalarFieldEnum[]
  }

  /**
   * StudentInternship create
   */
  export type StudentInternshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentInternship
     */
    select?: StudentInternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentInternship
     */
    omit?: StudentInternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInternshipInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentInternship.
     */
    data: XOR<StudentInternshipCreateInput, StudentInternshipUncheckedCreateInput>
  }

  /**
   * StudentInternship createMany
   */
  export type StudentInternshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentInternships.
     */
    data: StudentInternshipCreateManyInput | StudentInternshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentInternship createManyAndReturn
   */
  export type StudentInternshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentInternship
     */
    select?: StudentInternshipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentInternship
     */
    omit?: StudentInternshipOmit<ExtArgs> | null
    /**
     * The data used to create many StudentInternships.
     */
    data: StudentInternshipCreateManyInput | StudentInternshipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInternshipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentInternship update
   */
  export type StudentInternshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentInternship
     */
    select?: StudentInternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentInternship
     */
    omit?: StudentInternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInternshipInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentInternship.
     */
    data: XOR<StudentInternshipUpdateInput, StudentInternshipUncheckedUpdateInput>
    /**
     * Choose, which StudentInternship to update.
     */
    where: StudentInternshipWhereUniqueInput
  }

  /**
   * StudentInternship updateMany
   */
  export type StudentInternshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentInternships.
     */
    data: XOR<StudentInternshipUpdateManyMutationInput, StudentInternshipUncheckedUpdateManyInput>
    /**
     * Filter which StudentInternships to update
     */
    where?: StudentInternshipWhereInput
    /**
     * Limit how many StudentInternships to update.
     */
    limit?: number
  }

  /**
   * StudentInternship updateManyAndReturn
   */
  export type StudentInternshipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentInternship
     */
    select?: StudentInternshipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentInternship
     */
    omit?: StudentInternshipOmit<ExtArgs> | null
    /**
     * The data used to update StudentInternships.
     */
    data: XOR<StudentInternshipUpdateManyMutationInput, StudentInternshipUncheckedUpdateManyInput>
    /**
     * Filter which StudentInternships to update
     */
    where?: StudentInternshipWhereInput
    /**
     * Limit how many StudentInternships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInternshipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentInternship upsert
   */
  export type StudentInternshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentInternship
     */
    select?: StudentInternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentInternship
     */
    omit?: StudentInternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInternshipInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentInternship to update in case it exists.
     */
    where: StudentInternshipWhereUniqueInput
    /**
     * In case the StudentInternship found by the `where` argument doesn't exist, create a new StudentInternship with this data.
     */
    create: XOR<StudentInternshipCreateInput, StudentInternshipUncheckedCreateInput>
    /**
     * In case the StudentInternship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentInternshipUpdateInput, StudentInternshipUncheckedUpdateInput>
  }

  /**
   * StudentInternship delete
   */
  export type StudentInternshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentInternship
     */
    select?: StudentInternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentInternship
     */
    omit?: StudentInternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInternshipInclude<ExtArgs> | null
    /**
     * Filter which StudentInternship to delete.
     */
    where: StudentInternshipWhereUniqueInput
  }

  /**
   * StudentInternship deleteMany
   */
  export type StudentInternshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentInternships to delete
     */
    where?: StudentInternshipWhereInput
    /**
     * Limit how many StudentInternships to delete.
     */
    limit?: number
  }

  /**
   * StudentInternship without action
   */
  export type StudentInternshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentInternship
     */
    select?: StudentInternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentInternship
     */
    omit?: StudentInternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInternshipInclude<ExtArgs> | null
  }


  /**
   * Model SavedInternship
   */

  export type AggregateSavedInternship = {
    _count: SavedInternshipCountAggregateOutputType | null
    _min: SavedInternshipMinAggregateOutputType | null
    _max: SavedInternshipMaxAggregateOutputType | null
  }

  export type SavedInternshipMinAggregateOutputType = {
    studentId: string | null
    internshipId: string | null
    savedAt: Date | null
  }

  export type SavedInternshipMaxAggregateOutputType = {
    studentId: string | null
    internshipId: string | null
    savedAt: Date | null
  }

  export type SavedInternshipCountAggregateOutputType = {
    studentId: number
    internshipId: number
    savedAt: number
    _all: number
  }


  export type SavedInternshipMinAggregateInputType = {
    studentId?: true
    internshipId?: true
    savedAt?: true
  }

  export type SavedInternshipMaxAggregateInputType = {
    studentId?: true
    internshipId?: true
    savedAt?: true
  }

  export type SavedInternshipCountAggregateInputType = {
    studentId?: true
    internshipId?: true
    savedAt?: true
    _all?: true
  }

  export type SavedInternshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedInternship to aggregate.
     */
    where?: SavedInternshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedInternships to fetch.
     */
    orderBy?: SavedInternshipOrderByWithRelationInput | SavedInternshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedInternshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedInternships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedInternships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedInternships
    **/
    _count?: true | SavedInternshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedInternshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedInternshipMaxAggregateInputType
  }

  export type GetSavedInternshipAggregateType<T extends SavedInternshipAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedInternship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedInternship[P]>
      : GetScalarType<T[P], AggregateSavedInternship[P]>
  }




  export type SavedInternshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedInternshipWhereInput
    orderBy?: SavedInternshipOrderByWithAggregationInput | SavedInternshipOrderByWithAggregationInput[]
    by: SavedInternshipScalarFieldEnum[] | SavedInternshipScalarFieldEnum
    having?: SavedInternshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedInternshipCountAggregateInputType | true
    _min?: SavedInternshipMinAggregateInputType
    _max?: SavedInternshipMaxAggregateInputType
  }

  export type SavedInternshipGroupByOutputType = {
    studentId: string
    internshipId: string
    savedAt: Date
    _count: SavedInternshipCountAggregateOutputType | null
    _min: SavedInternshipMinAggregateOutputType | null
    _max: SavedInternshipMaxAggregateOutputType | null
  }

  type GetSavedInternshipGroupByPayload<T extends SavedInternshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedInternshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedInternshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedInternshipGroupByOutputType[P]>
            : GetScalarType<T[P], SavedInternshipGroupByOutputType[P]>
        }
      >
    >


  export type SavedInternshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studentId?: boolean
    internshipId?: boolean
    savedAt?: boolean
    internship?: boolean | InternshipDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedInternship"]>

  export type SavedInternshipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studentId?: boolean
    internshipId?: boolean
    savedAt?: boolean
    internship?: boolean | InternshipDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedInternship"]>

  export type SavedInternshipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studentId?: boolean
    internshipId?: boolean
    savedAt?: boolean
    internship?: boolean | InternshipDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedInternship"]>

  export type SavedInternshipSelectScalar = {
    studentId?: boolean
    internshipId?: boolean
    savedAt?: boolean
  }

  export type SavedInternshipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"studentId" | "internshipId" | "savedAt", ExtArgs["result"]["savedInternship"]>
  export type SavedInternshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    internship?: boolean | InternshipDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type SavedInternshipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    internship?: boolean | InternshipDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type SavedInternshipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    internship?: boolean | InternshipDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $SavedInternshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedInternship"
    objects: {
      internship: Prisma.$InternshipPayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      studentId: string
      internshipId: string
      savedAt: Date
    }, ExtArgs["result"]["savedInternship"]>
    composites: {}
  }

  type SavedInternshipGetPayload<S extends boolean | null | undefined | SavedInternshipDefaultArgs> = $Result.GetResult<Prisma.$SavedInternshipPayload, S>

  type SavedInternshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedInternshipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedInternshipCountAggregateInputType | true
    }

  export interface SavedInternshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedInternship'], meta: { name: 'SavedInternship' } }
    /**
     * Find zero or one SavedInternship that matches the filter.
     * @param {SavedInternshipFindUniqueArgs} args - Arguments to find a SavedInternship
     * @example
     * // Get one SavedInternship
     * const savedInternship = await prisma.savedInternship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedInternshipFindUniqueArgs>(args: SelectSubset<T, SavedInternshipFindUniqueArgs<ExtArgs>>): Prisma__SavedInternshipClient<$Result.GetResult<Prisma.$SavedInternshipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedInternship that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedInternshipFindUniqueOrThrowArgs} args - Arguments to find a SavedInternship
     * @example
     * // Get one SavedInternship
     * const savedInternship = await prisma.savedInternship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedInternshipFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedInternshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedInternshipClient<$Result.GetResult<Prisma.$SavedInternshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedInternship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedInternshipFindFirstArgs} args - Arguments to find a SavedInternship
     * @example
     * // Get one SavedInternship
     * const savedInternship = await prisma.savedInternship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedInternshipFindFirstArgs>(args?: SelectSubset<T, SavedInternshipFindFirstArgs<ExtArgs>>): Prisma__SavedInternshipClient<$Result.GetResult<Prisma.$SavedInternshipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedInternship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedInternshipFindFirstOrThrowArgs} args - Arguments to find a SavedInternship
     * @example
     * // Get one SavedInternship
     * const savedInternship = await prisma.savedInternship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedInternshipFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedInternshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedInternshipClient<$Result.GetResult<Prisma.$SavedInternshipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedInternships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedInternshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedInternships
     * const savedInternships = await prisma.savedInternship.findMany()
     * 
     * // Get first 10 SavedInternships
     * const savedInternships = await prisma.savedInternship.findMany({ take: 10 })
     * 
     * // Only select the `studentId`
     * const savedInternshipWithStudentIdOnly = await prisma.savedInternship.findMany({ select: { studentId: true } })
     * 
     */
    findMany<T extends SavedInternshipFindManyArgs>(args?: SelectSubset<T, SavedInternshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedInternshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedInternship.
     * @param {SavedInternshipCreateArgs} args - Arguments to create a SavedInternship.
     * @example
     * // Create one SavedInternship
     * const SavedInternship = await prisma.savedInternship.create({
     *   data: {
     *     // ... data to create a SavedInternship
     *   }
     * })
     * 
     */
    create<T extends SavedInternshipCreateArgs>(args: SelectSubset<T, SavedInternshipCreateArgs<ExtArgs>>): Prisma__SavedInternshipClient<$Result.GetResult<Prisma.$SavedInternshipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedInternships.
     * @param {SavedInternshipCreateManyArgs} args - Arguments to create many SavedInternships.
     * @example
     * // Create many SavedInternships
     * const savedInternship = await prisma.savedInternship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedInternshipCreateManyArgs>(args?: SelectSubset<T, SavedInternshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedInternships and returns the data saved in the database.
     * @param {SavedInternshipCreateManyAndReturnArgs} args - Arguments to create many SavedInternships.
     * @example
     * // Create many SavedInternships
     * const savedInternship = await prisma.savedInternship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedInternships and only return the `studentId`
     * const savedInternshipWithStudentIdOnly = await prisma.savedInternship.createManyAndReturn({
     *   select: { studentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedInternshipCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedInternshipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedInternshipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavedInternship.
     * @param {SavedInternshipDeleteArgs} args - Arguments to delete one SavedInternship.
     * @example
     * // Delete one SavedInternship
     * const SavedInternship = await prisma.savedInternship.delete({
     *   where: {
     *     // ... filter to delete one SavedInternship
     *   }
     * })
     * 
     */
    delete<T extends SavedInternshipDeleteArgs>(args: SelectSubset<T, SavedInternshipDeleteArgs<ExtArgs>>): Prisma__SavedInternshipClient<$Result.GetResult<Prisma.$SavedInternshipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedInternship.
     * @param {SavedInternshipUpdateArgs} args - Arguments to update one SavedInternship.
     * @example
     * // Update one SavedInternship
     * const savedInternship = await prisma.savedInternship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedInternshipUpdateArgs>(args: SelectSubset<T, SavedInternshipUpdateArgs<ExtArgs>>): Prisma__SavedInternshipClient<$Result.GetResult<Prisma.$SavedInternshipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedInternships.
     * @param {SavedInternshipDeleteManyArgs} args - Arguments to filter SavedInternships to delete.
     * @example
     * // Delete a few SavedInternships
     * const { count } = await prisma.savedInternship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedInternshipDeleteManyArgs>(args?: SelectSubset<T, SavedInternshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedInternships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedInternshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedInternships
     * const savedInternship = await prisma.savedInternship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedInternshipUpdateManyArgs>(args: SelectSubset<T, SavedInternshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedInternships and returns the data updated in the database.
     * @param {SavedInternshipUpdateManyAndReturnArgs} args - Arguments to update many SavedInternships.
     * @example
     * // Update many SavedInternships
     * const savedInternship = await prisma.savedInternship.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavedInternships and only return the `studentId`
     * const savedInternshipWithStudentIdOnly = await prisma.savedInternship.updateManyAndReturn({
     *   select: { studentId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SavedInternshipUpdateManyAndReturnArgs>(args: SelectSubset<T, SavedInternshipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedInternshipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavedInternship.
     * @param {SavedInternshipUpsertArgs} args - Arguments to update or create a SavedInternship.
     * @example
     * // Update or create a SavedInternship
     * const savedInternship = await prisma.savedInternship.upsert({
     *   create: {
     *     // ... data to create a SavedInternship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedInternship we want to update
     *   }
     * })
     */
    upsert<T extends SavedInternshipUpsertArgs>(args: SelectSubset<T, SavedInternshipUpsertArgs<ExtArgs>>): Prisma__SavedInternshipClient<$Result.GetResult<Prisma.$SavedInternshipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedInternships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedInternshipCountArgs} args - Arguments to filter SavedInternships to count.
     * @example
     * // Count the number of SavedInternships
     * const count = await prisma.savedInternship.count({
     *   where: {
     *     // ... the filter for the SavedInternships we want to count
     *   }
     * })
    **/
    count<T extends SavedInternshipCountArgs>(
      args?: Subset<T, SavedInternshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedInternshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedInternship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedInternshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavedInternshipAggregateArgs>(args: Subset<T, SavedInternshipAggregateArgs>): Prisma.PrismaPromise<GetSavedInternshipAggregateType<T>>

    /**
     * Group by SavedInternship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedInternshipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavedInternshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedInternshipGroupByArgs['orderBy'] }
        : { orderBy?: SavedInternshipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavedInternshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedInternshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedInternship model
   */
  readonly fields: SavedInternshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedInternship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedInternshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    internship<T extends InternshipDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InternshipDefaultArgs<ExtArgs>>): Prisma__InternshipClient<$Result.GetResult<Prisma.$InternshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SavedInternship model
   */
  interface SavedInternshipFieldRefs {
    readonly studentId: FieldRef<"SavedInternship", 'String'>
    readonly internshipId: FieldRef<"SavedInternship", 'String'>
    readonly savedAt: FieldRef<"SavedInternship", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedInternship findUnique
   */
  export type SavedInternshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedInternship
     */
    select?: SavedInternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedInternship
     */
    omit?: SavedInternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedInternshipInclude<ExtArgs> | null
    /**
     * Filter, which SavedInternship to fetch.
     */
    where: SavedInternshipWhereUniqueInput
  }

  /**
   * SavedInternship findUniqueOrThrow
   */
  export type SavedInternshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedInternship
     */
    select?: SavedInternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedInternship
     */
    omit?: SavedInternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedInternshipInclude<ExtArgs> | null
    /**
     * Filter, which SavedInternship to fetch.
     */
    where: SavedInternshipWhereUniqueInput
  }

  /**
   * SavedInternship findFirst
   */
  export type SavedInternshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedInternship
     */
    select?: SavedInternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedInternship
     */
    omit?: SavedInternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedInternshipInclude<ExtArgs> | null
    /**
     * Filter, which SavedInternship to fetch.
     */
    where?: SavedInternshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedInternships to fetch.
     */
    orderBy?: SavedInternshipOrderByWithRelationInput | SavedInternshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedInternships.
     */
    cursor?: SavedInternshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedInternships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedInternships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedInternships.
     */
    distinct?: SavedInternshipScalarFieldEnum | SavedInternshipScalarFieldEnum[]
  }

  /**
   * SavedInternship findFirstOrThrow
   */
  export type SavedInternshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedInternship
     */
    select?: SavedInternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedInternship
     */
    omit?: SavedInternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedInternshipInclude<ExtArgs> | null
    /**
     * Filter, which SavedInternship to fetch.
     */
    where?: SavedInternshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedInternships to fetch.
     */
    orderBy?: SavedInternshipOrderByWithRelationInput | SavedInternshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedInternships.
     */
    cursor?: SavedInternshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedInternships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedInternships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedInternships.
     */
    distinct?: SavedInternshipScalarFieldEnum | SavedInternshipScalarFieldEnum[]
  }

  /**
   * SavedInternship findMany
   */
  export type SavedInternshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedInternship
     */
    select?: SavedInternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedInternship
     */
    omit?: SavedInternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedInternshipInclude<ExtArgs> | null
    /**
     * Filter, which SavedInternships to fetch.
     */
    where?: SavedInternshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedInternships to fetch.
     */
    orderBy?: SavedInternshipOrderByWithRelationInput | SavedInternshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedInternships.
     */
    cursor?: SavedInternshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedInternships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedInternships.
     */
    skip?: number
    distinct?: SavedInternshipScalarFieldEnum | SavedInternshipScalarFieldEnum[]
  }

  /**
   * SavedInternship create
   */
  export type SavedInternshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedInternship
     */
    select?: SavedInternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedInternship
     */
    omit?: SavedInternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedInternshipInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedInternship.
     */
    data: XOR<SavedInternshipCreateInput, SavedInternshipUncheckedCreateInput>
  }

  /**
   * SavedInternship createMany
   */
  export type SavedInternshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedInternships.
     */
    data: SavedInternshipCreateManyInput | SavedInternshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedInternship createManyAndReturn
   */
  export type SavedInternshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedInternship
     */
    select?: SavedInternshipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedInternship
     */
    omit?: SavedInternshipOmit<ExtArgs> | null
    /**
     * The data used to create many SavedInternships.
     */
    data: SavedInternshipCreateManyInput | SavedInternshipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedInternshipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedInternship update
   */
  export type SavedInternshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedInternship
     */
    select?: SavedInternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedInternship
     */
    omit?: SavedInternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedInternshipInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedInternship.
     */
    data: XOR<SavedInternshipUpdateInput, SavedInternshipUncheckedUpdateInput>
    /**
     * Choose, which SavedInternship to update.
     */
    where: SavedInternshipWhereUniqueInput
  }

  /**
   * SavedInternship updateMany
   */
  export type SavedInternshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedInternships.
     */
    data: XOR<SavedInternshipUpdateManyMutationInput, SavedInternshipUncheckedUpdateManyInput>
    /**
     * Filter which SavedInternships to update
     */
    where?: SavedInternshipWhereInput
    /**
     * Limit how many SavedInternships to update.
     */
    limit?: number
  }

  /**
   * SavedInternship updateManyAndReturn
   */
  export type SavedInternshipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedInternship
     */
    select?: SavedInternshipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedInternship
     */
    omit?: SavedInternshipOmit<ExtArgs> | null
    /**
     * The data used to update SavedInternships.
     */
    data: XOR<SavedInternshipUpdateManyMutationInput, SavedInternshipUncheckedUpdateManyInput>
    /**
     * Filter which SavedInternships to update
     */
    where?: SavedInternshipWhereInput
    /**
     * Limit how many SavedInternships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedInternshipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedInternship upsert
   */
  export type SavedInternshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedInternship
     */
    select?: SavedInternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedInternship
     */
    omit?: SavedInternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedInternshipInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedInternship to update in case it exists.
     */
    where: SavedInternshipWhereUniqueInput
    /**
     * In case the SavedInternship found by the `where` argument doesn't exist, create a new SavedInternship with this data.
     */
    create: XOR<SavedInternshipCreateInput, SavedInternshipUncheckedCreateInput>
    /**
     * In case the SavedInternship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedInternshipUpdateInput, SavedInternshipUncheckedUpdateInput>
  }

  /**
   * SavedInternship delete
   */
  export type SavedInternshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedInternship
     */
    select?: SavedInternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedInternship
     */
    omit?: SavedInternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedInternshipInclude<ExtArgs> | null
    /**
     * Filter which SavedInternship to delete.
     */
    where: SavedInternshipWhereUniqueInput
  }

  /**
   * SavedInternship deleteMany
   */
  export type SavedInternshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedInternships to delete
     */
    where?: SavedInternshipWhereInput
    /**
     * Limit how many SavedInternships to delete.
     */
    limit?: number
  }

  /**
   * SavedInternship without action
   */
  export type SavedInternshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedInternship
     */
    select?: SavedInternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedInternship
     */
    omit?: SavedInternshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedInternshipInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: string
    name: string
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    internships?: boolean | Skill$internshipsArgs<ExtArgs>
    students?: boolean | Skill$studentsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    internships?: boolean | Skill$internshipsArgs<ExtArgs>
    students?: boolean | Skill$studentsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      internships: Prisma.$InternshipSkillPayload<ExtArgs>[]
      students: Prisma.$StudentSkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    internships<T extends Skill$internshipsArgs<ExtArgs> = {}>(args?: Subset<T, Skill$internshipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternshipSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    students<T extends Skill$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Skill$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'String'>
    readonly name: FieldRef<"Skill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill.internships
   */
  export type Skill$internshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternshipSkill
     */
    select?: InternshipSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternshipSkill
     */
    omit?: InternshipSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipSkillInclude<ExtArgs> | null
    where?: InternshipSkillWhereInput
    orderBy?: InternshipSkillOrderByWithRelationInput | InternshipSkillOrderByWithRelationInput[]
    cursor?: InternshipSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InternshipSkillScalarFieldEnum | InternshipSkillScalarFieldEnum[]
  }

  /**
   * Skill.students
   */
  export type Skill$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSkill
     */
    select?: StudentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSkill
     */
    omit?: StudentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSkillInclude<ExtArgs> | null
    where?: StudentSkillWhereInput
    orderBy?: StudentSkillOrderByWithRelationInput | StudentSkillOrderByWithRelationInput[]
    cursor?: StudentSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentSkillScalarFieldEnum | StudentSkillScalarFieldEnum[]
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model StudentSkill
   */

  export type AggregateStudentSkill = {
    _count: StudentSkillCountAggregateOutputType | null
    _min: StudentSkillMinAggregateOutputType | null
    _max: StudentSkillMaxAggregateOutputType | null
  }

  export type StudentSkillMinAggregateOutputType = {
    studentId: string | null
    skillId: string | null
  }

  export type StudentSkillMaxAggregateOutputType = {
    studentId: string | null
    skillId: string | null
  }

  export type StudentSkillCountAggregateOutputType = {
    studentId: number
    skillId: number
    _all: number
  }


  export type StudentSkillMinAggregateInputType = {
    studentId?: true
    skillId?: true
  }

  export type StudentSkillMaxAggregateInputType = {
    studentId?: true
    skillId?: true
  }

  export type StudentSkillCountAggregateInputType = {
    studentId?: true
    skillId?: true
    _all?: true
  }

  export type StudentSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentSkill to aggregate.
     */
    where?: StudentSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSkills to fetch.
     */
    orderBy?: StudentSkillOrderByWithRelationInput | StudentSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentSkills
    **/
    _count?: true | StudentSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentSkillMaxAggregateInputType
  }

  export type GetStudentSkillAggregateType<T extends StudentSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentSkill[P]>
      : GetScalarType<T[P], AggregateStudentSkill[P]>
  }




  export type StudentSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentSkillWhereInput
    orderBy?: StudentSkillOrderByWithAggregationInput | StudentSkillOrderByWithAggregationInput[]
    by: StudentSkillScalarFieldEnum[] | StudentSkillScalarFieldEnum
    having?: StudentSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentSkillCountAggregateInputType | true
    _min?: StudentSkillMinAggregateInputType
    _max?: StudentSkillMaxAggregateInputType
  }

  export type StudentSkillGroupByOutputType = {
    studentId: string
    skillId: string
    _count: StudentSkillCountAggregateOutputType | null
    _min: StudentSkillMinAggregateOutputType | null
    _max: StudentSkillMaxAggregateOutputType | null
  }

  type GetStudentSkillGroupByPayload<T extends StudentSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentSkillGroupByOutputType[P]>
            : GetScalarType<T[P], StudentSkillGroupByOutputType[P]>
        }
      >
    >


  export type StudentSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studentId?: boolean
    skillId?: boolean
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentSkill"]>

  export type StudentSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studentId?: boolean
    skillId?: boolean
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentSkill"]>

  export type StudentSkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studentId?: boolean
    skillId?: boolean
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentSkill"]>

  export type StudentSkillSelectScalar = {
    studentId?: boolean
    skillId?: boolean
  }

  export type StudentSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"studentId" | "skillId", ExtArgs["result"]["studentSkill"]>
  export type StudentSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type StudentSkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type StudentSkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $StudentSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentSkill"
    objects: {
      skill: Prisma.$SkillPayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      studentId: string
      skillId: string
    }, ExtArgs["result"]["studentSkill"]>
    composites: {}
  }

  type StudentSkillGetPayload<S extends boolean | null | undefined | StudentSkillDefaultArgs> = $Result.GetResult<Prisma.$StudentSkillPayload, S>

  type StudentSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentSkillCountAggregateInputType | true
    }

  export interface StudentSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentSkill'], meta: { name: 'StudentSkill' } }
    /**
     * Find zero or one StudentSkill that matches the filter.
     * @param {StudentSkillFindUniqueArgs} args - Arguments to find a StudentSkill
     * @example
     * // Get one StudentSkill
     * const studentSkill = await prisma.studentSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentSkillFindUniqueArgs>(args: SelectSubset<T, StudentSkillFindUniqueArgs<ExtArgs>>): Prisma__StudentSkillClient<$Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentSkillFindUniqueOrThrowArgs} args - Arguments to find a StudentSkill
     * @example
     * // Get one StudentSkill
     * const studentSkill = await prisma.studentSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentSkillClient<$Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSkillFindFirstArgs} args - Arguments to find a StudentSkill
     * @example
     * // Get one StudentSkill
     * const studentSkill = await prisma.studentSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentSkillFindFirstArgs>(args?: SelectSubset<T, StudentSkillFindFirstArgs<ExtArgs>>): Prisma__StudentSkillClient<$Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSkillFindFirstOrThrowArgs} args - Arguments to find a StudentSkill
     * @example
     * // Get one StudentSkill
     * const studentSkill = await prisma.studentSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentSkillClient<$Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentSkills
     * const studentSkills = await prisma.studentSkill.findMany()
     * 
     * // Get first 10 StudentSkills
     * const studentSkills = await prisma.studentSkill.findMany({ take: 10 })
     * 
     * // Only select the `studentId`
     * const studentSkillWithStudentIdOnly = await prisma.studentSkill.findMany({ select: { studentId: true } })
     * 
     */
    findMany<T extends StudentSkillFindManyArgs>(args?: SelectSubset<T, StudentSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentSkill.
     * @param {StudentSkillCreateArgs} args - Arguments to create a StudentSkill.
     * @example
     * // Create one StudentSkill
     * const StudentSkill = await prisma.studentSkill.create({
     *   data: {
     *     // ... data to create a StudentSkill
     *   }
     * })
     * 
     */
    create<T extends StudentSkillCreateArgs>(args: SelectSubset<T, StudentSkillCreateArgs<ExtArgs>>): Prisma__StudentSkillClient<$Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentSkills.
     * @param {StudentSkillCreateManyArgs} args - Arguments to create many StudentSkills.
     * @example
     * // Create many StudentSkills
     * const studentSkill = await prisma.studentSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentSkillCreateManyArgs>(args?: SelectSubset<T, StudentSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentSkills and returns the data saved in the database.
     * @param {StudentSkillCreateManyAndReturnArgs} args - Arguments to create many StudentSkills.
     * @example
     * // Create many StudentSkills
     * const studentSkill = await prisma.studentSkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentSkills and only return the `studentId`
     * const studentSkillWithStudentIdOnly = await prisma.studentSkill.createManyAndReturn({
     *   select: { studentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentSkill.
     * @param {StudentSkillDeleteArgs} args - Arguments to delete one StudentSkill.
     * @example
     * // Delete one StudentSkill
     * const StudentSkill = await prisma.studentSkill.delete({
     *   where: {
     *     // ... filter to delete one StudentSkill
     *   }
     * })
     * 
     */
    delete<T extends StudentSkillDeleteArgs>(args: SelectSubset<T, StudentSkillDeleteArgs<ExtArgs>>): Prisma__StudentSkillClient<$Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentSkill.
     * @param {StudentSkillUpdateArgs} args - Arguments to update one StudentSkill.
     * @example
     * // Update one StudentSkill
     * const studentSkill = await prisma.studentSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentSkillUpdateArgs>(args: SelectSubset<T, StudentSkillUpdateArgs<ExtArgs>>): Prisma__StudentSkillClient<$Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentSkills.
     * @param {StudentSkillDeleteManyArgs} args - Arguments to filter StudentSkills to delete.
     * @example
     * // Delete a few StudentSkills
     * const { count } = await prisma.studentSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentSkillDeleteManyArgs>(args?: SelectSubset<T, StudentSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentSkills
     * const studentSkill = await prisma.studentSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentSkillUpdateManyArgs>(args: SelectSubset<T, StudentSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentSkills and returns the data updated in the database.
     * @param {StudentSkillUpdateManyAndReturnArgs} args - Arguments to update many StudentSkills.
     * @example
     * // Update many StudentSkills
     * const studentSkill = await prisma.studentSkill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentSkills and only return the `studentId`
     * const studentSkillWithStudentIdOnly = await prisma.studentSkill.updateManyAndReturn({
     *   select: { studentId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentSkillUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentSkill.
     * @param {StudentSkillUpsertArgs} args - Arguments to update or create a StudentSkill.
     * @example
     * // Update or create a StudentSkill
     * const studentSkill = await prisma.studentSkill.upsert({
     *   create: {
     *     // ... data to create a StudentSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentSkill we want to update
     *   }
     * })
     */
    upsert<T extends StudentSkillUpsertArgs>(args: SelectSubset<T, StudentSkillUpsertArgs<ExtArgs>>): Prisma__StudentSkillClient<$Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSkillCountArgs} args - Arguments to filter StudentSkills to count.
     * @example
     * // Count the number of StudentSkills
     * const count = await prisma.studentSkill.count({
     *   where: {
     *     // ... the filter for the StudentSkills we want to count
     *   }
     * })
    **/
    count<T extends StudentSkillCountArgs>(
      args?: Subset<T, StudentSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentSkillAggregateArgs>(args: Subset<T, StudentSkillAggregateArgs>): Prisma.PrismaPromise<GetStudentSkillAggregateType<T>>

    /**
     * Group by StudentSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentSkillGroupByArgs['orderBy'] }
        : { orderBy?: StudentSkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentSkill model
   */
  readonly fields: StudentSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentSkill model
   */
  interface StudentSkillFieldRefs {
    readonly studentId: FieldRef<"StudentSkill", 'String'>
    readonly skillId: FieldRef<"StudentSkill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StudentSkill findUnique
   */
  export type StudentSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSkill
     */
    select?: StudentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSkill
     */
    omit?: StudentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSkillInclude<ExtArgs> | null
    /**
     * Filter, which StudentSkill to fetch.
     */
    where: StudentSkillWhereUniqueInput
  }

  /**
   * StudentSkill findUniqueOrThrow
   */
  export type StudentSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSkill
     */
    select?: StudentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSkill
     */
    omit?: StudentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSkillInclude<ExtArgs> | null
    /**
     * Filter, which StudentSkill to fetch.
     */
    where: StudentSkillWhereUniqueInput
  }

  /**
   * StudentSkill findFirst
   */
  export type StudentSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSkill
     */
    select?: StudentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSkill
     */
    omit?: StudentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSkillInclude<ExtArgs> | null
    /**
     * Filter, which StudentSkill to fetch.
     */
    where?: StudentSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSkills to fetch.
     */
    orderBy?: StudentSkillOrderByWithRelationInput | StudentSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentSkills.
     */
    cursor?: StudentSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentSkills.
     */
    distinct?: StudentSkillScalarFieldEnum | StudentSkillScalarFieldEnum[]
  }

  /**
   * StudentSkill findFirstOrThrow
   */
  export type StudentSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSkill
     */
    select?: StudentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSkill
     */
    omit?: StudentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSkillInclude<ExtArgs> | null
    /**
     * Filter, which StudentSkill to fetch.
     */
    where?: StudentSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSkills to fetch.
     */
    orderBy?: StudentSkillOrderByWithRelationInput | StudentSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentSkills.
     */
    cursor?: StudentSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentSkills.
     */
    distinct?: StudentSkillScalarFieldEnum | StudentSkillScalarFieldEnum[]
  }

  /**
   * StudentSkill findMany
   */
  export type StudentSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSkill
     */
    select?: StudentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSkill
     */
    omit?: StudentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSkillInclude<ExtArgs> | null
    /**
     * Filter, which StudentSkills to fetch.
     */
    where?: StudentSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSkills to fetch.
     */
    orderBy?: StudentSkillOrderByWithRelationInput | StudentSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentSkills.
     */
    cursor?: StudentSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSkills.
     */
    skip?: number
    distinct?: StudentSkillScalarFieldEnum | StudentSkillScalarFieldEnum[]
  }

  /**
   * StudentSkill create
   */
  export type StudentSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSkill
     */
    select?: StudentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSkill
     */
    omit?: StudentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentSkill.
     */
    data: XOR<StudentSkillCreateInput, StudentSkillUncheckedCreateInput>
  }

  /**
   * StudentSkill createMany
   */
  export type StudentSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentSkills.
     */
    data: StudentSkillCreateManyInput | StudentSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentSkill createManyAndReturn
   */
  export type StudentSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSkill
     */
    select?: StudentSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSkill
     */
    omit?: StudentSkillOmit<ExtArgs> | null
    /**
     * The data used to create many StudentSkills.
     */
    data: StudentSkillCreateManyInput | StudentSkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentSkill update
   */
  export type StudentSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSkill
     */
    select?: StudentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSkill
     */
    omit?: StudentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentSkill.
     */
    data: XOR<StudentSkillUpdateInput, StudentSkillUncheckedUpdateInput>
    /**
     * Choose, which StudentSkill to update.
     */
    where: StudentSkillWhereUniqueInput
  }

  /**
   * StudentSkill updateMany
   */
  export type StudentSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentSkills.
     */
    data: XOR<StudentSkillUpdateManyMutationInput, StudentSkillUncheckedUpdateManyInput>
    /**
     * Filter which StudentSkills to update
     */
    where?: StudentSkillWhereInput
    /**
     * Limit how many StudentSkills to update.
     */
    limit?: number
  }

  /**
   * StudentSkill updateManyAndReturn
   */
  export type StudentSkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSkill
     */
    select?: StudentSkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSkill
     */
    omit?: StudentSkillOmit<ExtArgs> | null
    /**
     * The data used to update StudentSkills.
     */
    data: XOR<StudentSkillUpdateManyMutationInput, StudentSkillUncheckedUpdateManyInput>
    /**
     * Filter which StudentSkills to update
     */
    where?: StudentSkillWhereInput
    /**
     * Limit how many StudentSkills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentSkill upsert
   */
  export type StudentSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSkill
     */
    select?: StudentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSkill
     */
    omit?: StudentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentSkill to update in case it exists.
     */
    where: StudentSkillWhereUniqueInput
    /**
     * In case the StudentSkill found by the `where` argument doesn't exist, create a new StudentSkill with this data.
     */
    create: XOR<StudentSkillCreateInput, StudentSkillUncheckedCreateInput>
    /**
     * In case the StudentSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentSkillUpdateInput, StudentSkillUncheckedUpdateInput>
  }

  /**
   * StudentSkill delete
   */
  export type StudentSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSkill
     */
    select?: StudentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSkill
     */
    omit?: StudentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSkillInclude<ExtArgs> | null
    /**
     * Filter which StudentSkill to delete.
     */
    where: StudentSkillWhereUniqueInput
  }

  /**
   * StudentSkill deleteMany
   */
  export type StudentSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentSkills to delete
     */
    where?: StudentSkillWhereInput
    /**
     * Limit how many StudentSkills to delete.
     */
    limit?: number
  }

  /**
   * StudentSkill without action
   */
  export type StudentSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSkill
     */
    select?: StudentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSkill
     */
    omit?: StudentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSkillInclude<ExtArgs> | null
  }


  /**
   * Model InternshipSkill
   */

  export type AggregateInternshipSkill = {
    _count: InternshipSkillCountAggregateOutputType | null
    _min: InternshipSkillMinAggregateOutputType | null
    _max: InternshipSkillMaxAggregateOutputType | null
  }

  export type InternshipSkillMinAggregateOutputType = {
    internshipId: string | null
    skillId: string | null
  }

  export type InternshipSkillMaxAggregateOutputType = {
    internshipId: string | null
    skillId: string | null
  }

  export type InternshipSkillCountAggregateOutputType = {
    internshipId: number
    skillId: number
    _all: number
  }


  export type InternshipSkillMinAggregateInputType = {
    internshipId?: true
    skillId?: true
  }

  export type InternshipSkillMaxAggregateInputType = {
    internshipId?: true
    skillId?: true
  }

  export type InternshipSkillCountAggregateInputType = {
    internshipId?: true
    skillId?: true
    _all?: true
  }

  export type InternshipSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InternshipSkill to aggregate.
     */
    where?: InternshipSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InternshipSkills to fetch.
     */
    orderBy?: InternshipSkillOrderByWithRelationInput | InternshipSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InternshipSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InternshipSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InternshipSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InternshipSkills
    **/
    _count?: true | InternshipSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InternshipSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InternshipSkillMaxAggregateInputType
  }

  export type GetInternshipSkillAggregateType<T extends InternshipSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateInternshipSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInternshipSkill[P]>
      : GetScalarType<T[P], AggregateInternshipSkill[P]>
  }




  export type InternshipSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InternshipSkillWhereInput
    orderBy?: InternshipSkillOrderByWithAggregationInput | InternshipSkillOrderByWithAggregationInput[]
    by: InternshipSkillScalarFieldEnum[] | InternshipSkillScalarFieldEnum
    having?: InternshipSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InternshipSkillCountAggregateInputType | true
    _min?: InternshipSkillMinAggregateInputType
    _max?: InternshipSkillMaxAggregateInputType
  }

  export type InternshipSkillGroupByOutputType = {
    internshipId: string
    skillId: string
    _count: InternshipSkillCountAggregateOutputType | null
    _min: InternshipSkillMinAggregateOutputType | null
    _max: InternshipSkillMaxAggregateOutputType | null
  }

  type GetInternshipSkillGroupByPayload<T extends InternshipSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InternshipSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InternshipSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InternshipSkillGroupByOutputType[P]>
            : GetScalarType<T[P], InternshipSkillGroupByOutputType[P]>
        }
      >
    >


  export type InternshipSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    internshipId?: boolean
    skillId?: boolean
    internship?: boolean | InternshipDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["internshipSkill"]>

  export type InternshipSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    internshipId?: boolean
    skillId?: boolean
    internship?: boolean | InternshipDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["internshipSkill"]>

  export type InternshipSkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    internshipId?: boolean
    skillId?: boolean
    internship?: boolean | InternshipDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["internshipSkill"]>

  export type InternshipSkillSelectScalar = {
    internshipId?: boolean
    skillId?: boolean
  }

  export type InternshipSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"internshipId" | "skillId", ExtArgs["result"]["internshipSkill"]>
  export type InternshipSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    internship?: boolean | InternshipDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type InternshipSkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    internship?: boolean | InternshipDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type InternshipSkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    internship?: boolean | InternshipDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }

  export type $InternshipSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InternshipSkill"
    objects: {
      internship: Prisma.$InternshipPayload<ExtArgs>
      skill: Prisma.$SkillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      internshipId: string
      skillId: string
    }, ExtArgs["result"]["internshipSkill"]>
    composites: {}
  }

  type InternshipSkillGetPayload<S extends boolean | null | undefined | InternshipSkillDefaultArgs> = $Result.GetResult<Prisma.$InternshipSkillPayload, S>

  type InternshipSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InternshipSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InternshipSkillCountAggregateInputType | true
    }

  export interface InternshipSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InternshipSkill'], meta: { name: 'InternshipSkill' } }
    /**
     * Find zero or one InternshipSkill that matches the filter.
     * @param {InternshipSkillFindUniqueArgs} args - Arguments to find a InternshipSkill
     * @example
     * // Get one InternshipSkill
     * const internshipSkill = await prisma.internshipSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InternshipSkillFindUniqueArgs>(args: SelectSubset<T, InternshipSkillFindUniqueArgs<ExtArgs>>): Prisma__InternshipSkillClient<$Result.GetResult<Prisma.$InternshipSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InternshipSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InternshipSkillFindUniqueOrThrowArgs} args - Arguments to find a InternshipSkill
     * @example
     * // Get one InternshipSkill
     * const internshipSkill = await prisma.internshipSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InternshipSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, InternshipSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InternshipSkillClient<$Result.GetResult<Prisma.$InternshipSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InternshipSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipSkillFindFirstArgs} args - Arguments to find a InternshipSkill
     * @example
     * // Get one InternshipSkill
     * const internshipSkill = await prisma.internshipSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InternshipSkillFindFirstArgs>(args?: SelectSubset<T, InternshipSkillFindFirstArgs<ExtArgs>>): Prisma__InternshipSkillClient<$Result.GetResult<Prisma.$InternshipSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InternshipSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipSkillFindFirstOrThrowArgs} args - Arguments to find a InternshipSkill
     * @example
     * // Get one InternshipSkill
     * const internshipSkill = await prisma.internshipSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InternshipSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, InternshipSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__InternshipSkillClient<$Result.GetResult<Prisma.$InternshipSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InternshipSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InternshipSkills
     * const internshipSkills = await prisma.internshipSkill.findMany()
     * 
     * // Get first 10 InternshipSkills
     * const internshipSkills = await prisma.internshipSkill.findMany({ take: 10 })
     * 
     * // Only select the `internshipId`
     * const internshipSkillWithInternshipIdOnly = await prisma.internshipSkill.findMany({ select: { internshipId: true } })
     * 
     */
    findMany<T extends InternshipSkillFindManyArgs>(args?: SelectSubset<T, InternshipSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternshipSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InternshipSkill.
     * @param {InternshipSkillCreateArgs} args - Arguments to create a InternshipSkill.
     * @example
     * // Create one InternshipSkill
     * const InternshipSkill = await prisma.internshipSkill.create({
     *   data: {
     *     // ... data to create a InternshipSkill
     *   }
     * })
     * 
     */
    create<T extends InternshipSkillCreateArgs>(args: SelectSubset<T, InternshipSkillCreateArgs<ExtArgs>>): Prisma__InternshipSkillClient<$Result.GetResult<Prisma.$InternshipSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InternshipSkills.
     * @param {InternshipSkillCreateManyArgs} args - Arguments to create many InternshipSkills.
     * @example
     * // Create many InternshipSkills
     * const internshipSkill = await prisma.internshipSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InternshipSkillCreateManyArgs>(args?: SelectSubset<T, InternshipSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InternshipSkills and returns the data saved in the database.
     * @param {InternshipSkillCreateManyAndReturnArgs} args - Arguments to create many InternshipSkills.
     * @example
     * // Create many InternshipSkills
     * const internshipSkill = await prisma.internshipSkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InternshipSkills and only return the `internshipId`
     * const internshipSkillWithInternshipIdOnly = await prisma.internshipSkill.createManyAndReturn({
     *   select: { internshipId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InternshipSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, InternshipSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternshipSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InternshipSkill.
     * @param {InternshipSkillDeleteArgs} args - Arguments to delete one InternshipSkill.
     * @example
     * // Delete one InternshipSkill
     * const InternshipSkill = await prisma.internshipSkill.delete({
     *   where: {
     *     // ... filter to delete one InternshipSkill
     *   }
     * })
     * 
     */
    delete<T extends InternshipSkillDeleteArgs>(args: SelectSubset<T, InternshipSkillDeleteArgs<ExtArgs>>): Prisma__InternshipSkillClient<$Result.GetResult<Prisma.$InternshipSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InternshipSkill.
     * @param {InternshipSkillUpdateArgs} args - Arguments to update one InternshipSkill.
     * @example
     * // Update one InternshipSkill
     * const internshipSkill = await prisma.internshipSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InternshipSkillUpdateArgs>(args: SelectSubset<T, InternshipSkillUpdateArgs<ExtArgs>>): Prisma__InternshipSkillClient<$Result.GetResult<Prisma.$InternshipSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InternshipSkills.
     * @param {InternshipSkillDeleteManyArgs} args - Arguments to filter InternshipSkills to delete.
     * @example
     * // Delete a few InternshipSkills
     * const { count } = await prisma.internshipSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InternshipSkillDeleteManyArgs>(args?: SelectSubset<T, InternshipSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InternshipSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InternshipSkills
     * const internshipSkill = await prisma.internshipSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InternshipSkillUpdateManyArgs>(args: SelectSubset<T, InternshipSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InternshipSkills and returns the data updated in the database.
     * @param {InternshipSkillUpdateManyAndReturnArgs} args - Arguments to update many InternshipSkills.
     * @example
     * // Update many InternshipSkills
     * const internshipSkill = await prisma.internshipSkill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InternshipSkills and only return the `internshipId`
     * const internshipSkillWithInternshipIdOnly = await prisma.internshipSkill.updateManyAndReturn({
     *   select: { internshipId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InternshipSkillUpdateManyAndReturnArgs>(args: SelectSubset<T, InternshipSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternshipSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InternshipSkill.
     * @param {InternshipSkillUpsertArgs} args - Arguments to update or create a InternshipSkill.
     * @example
     * // Update or create a InternshipSkill
     * const internshipSkill = await prisma.internshipSkill.upsert({
     *   create: {
     *     // ... data to create a InternshipSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InternshipSkill we want to update
     *   }
     * })
     */
    upsert<T extends InternshipSkillUpsertArgs>(args: SelectSubset<T, InternshipSkillUpsertArgs<ExtArgs>>): Prisma__InternshipSkillClient<$Result.GetResult<Prisma.$InternshipSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InternshipSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipSkillCountArgs} args - Arguments to filter InternshipSkills to count.
     * @example
     * // Count the number of InternshipSkills
     * const count = await prisma.internshipSkill.count({
     *   where: {
     *     // ... the filter for the InternshipSkills we want to count
     *   }
     * })
    **/
    count<T extends InternshipSkillCountArgs>(
      args?: Subset<T, InternshipSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InternshipSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InternshipSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InternshipSkillAggregateArgs>(args: Subset<T, InternshipSkillAggregateArgs>): Prisma.PrismaPromise<GetInternshipSkillAggregateType<T>>

    /**
     * Group by InternshipSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipSkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InternshipSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InternshipSkillGroupByArgs['orderBy'] }
        : { orderBy?: InternshipSkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InternshipSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInternshipSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InternshipSkill model
   */
  readonly fields: InternshipSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InternshipSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InternshipSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    internship<T extends InternshipDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InternshipDefaultArgs<ExtArgs>>): Prisma__InternshipClient<$Result.GetResult<Prisma.$InternshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InternshipSkill model
   */
  interface InternshipSkillFieldRefs {
    readonly internshipId: FieldRef<"InternshipSkill", 'String'>
    readonly skillId: FieldRef<"InternshipSkill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InternshipSkill findUnique
   */
  export type InternshipSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternshipSkill
     */
    select?: InternshipSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternshipSkill
     */
    omit?: InternshipSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipSkillInclude<ExtArgs> | null
    /**
     * Filter, which InternshipSkill to fetch.
     */
    where: InternshipSkillWhereUniqueInput
  }

  /**
   * InternshipSkill findUniqueOrThrow
   */
  export type InternshipSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternshipSkill
     */
    select?: InternshipSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternshipSkill
     */
    omit?: InternshipSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipSkillInclude<ExtArgs> | null
    /**
     * Filter, which InternshipSkill to fetch.
     */
    where: InternshipSkillWhereUniqueInput
  }

  /**
   * InternshipSkill findFirst
   */
  export type InternshipSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternshipSkill
     */
    select?: InternshipSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternshipSkill
     */
    omit?: InternshipSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipSkillInclude<ExtArgs> | null
    /**
     * Filter, which InternshipSkill to fetch.
     */
    where?: InternshipSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InternshipSkills to fetch.
     */
    orderBy?: InternshipSkillOrderByWithRelationInput | InternshipSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InternshipSkills.
     */
    cursor?: InternshipSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InternshipSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InternshipSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InternshipSkills.
     */
    distinct?: InternshipSkillScalarFieldEnum | InternshipSkillScalarFieldEnum[]
  }

  /**
   * InternshipSkill findFirstOrThrow
   */
  export type InternshipSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternshipSkill
     */
    select?: InternshipSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternshipSkill
     */
    omit?: InternshipSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipSkillInclude<ExtArgs> | null
    /**
     * Filter, which InternshipSkill to fetch.
     */
    where?: InternshipSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InternshipSkills to fetch.
     */
    orderBy?: InternshipSkillOrderByWithRelationInput | InternshipSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InternshipSkills.
     */
    cursor?: InternshipSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InternshipSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InternshipSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InternshipSkills.
     */
    distinct?: InternshipSkillScalarFieldEnum | InternshipSkillScalarFieldEnum[]
  }

  /**
   * InternshipSkill findMany
   */
  export type InternshipSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternshipSkill
     */
    select?: InternshipSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternshipSkill
     */
    omit?: InternshipSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipSkillInclude<ExtArgs> | null
    /**
     * Filter, which InternshipSkills to fetch.
     */
    where?: InternshipSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InternshipSkills to fetch.
     */
    orderBy?: InternshipSkillOrderByWithRelationInput | InternshipSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InternshipSkills.
     */
    cursor?: InternshipSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InternshipSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InternshipSkills.
     */
    skip?: number
    distinct?: InternshipSkillScalarFieldEnum | InternshipSkillScalarFieldEnum[]
  }

  /**
   * InternshipSkill create
   */
  export type InternshipSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternshipSkill
     */
    select?: InternshipSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternshipSkill
     */
    omit?: InternshipSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a InternshipSkill.
     */
    data: XOR<InternshipSkillCreateInput, InternshipSkillUncheckedCreateInput>
  }

  /**
   * InternshipSkill createMany
   */
  export type InternshipSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InternshipSkills.
     */
    data: InternshipSkillCreateManyInput | InternshipSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InternshipSkill createManyAndReturn
   */
  export type InternshipSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternshipSkill
     */
    select?: InternshipSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InternshipSkill
     */
    omit?: InternshipSkillOmit<ExtArgs> | null
    /**
     * The data used to create many InternshipSkills.
     */
    data: InternshipSkillCreateManyInput | InternshipSkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipSkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InternshipSkill update
   */
  export type InternshipSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternshipSkill
     */
    select?: InternshipSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternshipSkill
     */
    omit?: InternshipSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a InternshipSkill.
     */
    data: XOR<InternshipSkillUpdateInput, InternshipSkillUncheckedUpdateInput>
    /**
     * Choose, which InternshipSkill to update.
     */
    where: InternshipSkillWhereUniqueInput
  }

  /**
   * InternshipSkill updateMany
   */
  export type InternshipSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InternshipSkills.
     */
    data: XOR<InternshipSkillUpdateManyMutationInput, InternshipSkillUncheckedUpdateManyInput>
    /**
     * Filter which InternshipSkills to update
     */
    where?: InternshipSkillWhereInput
    /**
     * Limit how many InternshipSkills to update.
     */
    limit?: number
  }

  /**
   * InternshipSkill updateManyAndReturn
   */
  export type InternshipSkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternshipSkill
     */
    select?: InternshipSkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InternshipSkill
     */
    omit?: InternshipSkillOmit<ExtArgs> | null
    /**
     * The data used to update InternshipSkills.
     */
    data: XOR<InternshipSkillUpdateManyMutationInput, InternshipSkillUncheckedUpdateManyInput>
    /**
     * Filter which InternshipSkills to update
     */
    where?: InternshipSkillWhereInput
    /**
     * Limit how many InternshipSkills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipSkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InternshipSkill upsert
   */
  export type InternshipSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternshipSkill
     */
    select?: InternshipSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternshipSkill
     */
    omit?: InternshipSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the InternshipSkill to update in case it exists.
     */
    where: InternshipSkillWhereUniqueInput
    /**
     * In case the InternshipSkill found by the `where` argument doesn't exist, create a new InternshipSkill with this data.
     */
    create: XOR<InternshipSkillCreateInput, InternshipSkillUncheckedCreateInput>
    /**
     * In case the InternshipSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InternshipSkillUpdateInput, InternshipSkillUncheckedUpdateInput>
  }

  /**
   * InternshipSkill delete
   */
  export type InternshipSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternshipSkill
     */
    select?: InternshipSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternshipSkill
     */
    omit?: InternshipSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipSkillInclude<ExtArgs> | null
    /**
     * Filter which InternshipSkill to delete.
     */
    where: InternshipSkillWhereUniqueInput
  }

  /**
   * InternshipSkill deleteMany
   */
  export type InternshipSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InternshipSkills to delete
     */
    where?: InternshipSkillWhereInput
    /**
     * Limit how many InternshipSkills to delete.
     */
    limit?: number
  }

  /**
   * InternshipSkill without action
   */
  export type InternshipSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternshipSkill
     */
    select?: InternshipSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternshipSkill
     */
    omit?: InternshipSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternshipSkillInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phoneNo: 'phoneNo',
    department: 'department',
    role: 'role',
    profileUrl: 'profileUrl',
    isActive: 'isActive',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    userId: 'userId',
    semester: 'semester',
    year: 'year',
    cgpa: 'cgpa',
    resumeUrl: 'resumeUrl',
    profileCompleted: 'profileCompleted',
    mentorId: 'mentorId'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const MentorScalarFieldEnum: {
    userId: 'userId',
    designation: 'designation',
    experienceYears: 'experienceYears'
  };

  export type MentorScalarFieldEnum = (typeof MentorScalarFieldEnum)[keyof typeof MentorScalarFieldEnum]


  export const PlacementOfficerScalarFieldEnum: {
    userId: 'userId'
  };

  export type PlacementOfficerScalarFieldEnum = (typeof PlacementOfficerScalarFieldEnum)[keyof typeof PlacementOfficerScalarFieldEnum]


  export const InternshipScalarFieldEnum: {
    id: 'id',
    title: 'title',
    companyName: 'companyName',
    companyUrl: 'companyUrl',
    companyLogo: 'companyLogo',
    description: 'description',
    location: 'location',
    mode: 'mode',
    duration: 'duration',
    applicationDeadline: 'applicationDeadline',
    requirement: 'requirement',
    salaryPackage: 'salaryPackage',
    minCgpa: 'minCgpa',
    status: 'status',
    createdAt: 'createdAt',
    postedById: 'postedById'
  };

  export type InternshipScalarFieldEnum = (typeof InternshipScalarFieldEnum)[keyof typeof InternshipScalarFieldEnum]


  export const StudentInternshipScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    internshipId: 'internshipId',
    status: 'status',
    certificateUrl: 'certificateUrl',
    appliedAt: 'appliedAt'
  };

  export type StudentInternshipScalarFieldEnum = (typeof StudentInternshipScalarFieldEnum)[keyof typeof StudentInternshipScalarFieldEnum]


  export const SavedInternshipScalarFieldEnum: {
    studentId: 'studentId',
    internshipId: 'internshipId',
    savedAt: 'savedAt'
  };

  export type SavedInternshipScalarFieldEnum = (typeof SavedInternshipScalarFieldEnum)[keyof typeof SavedInternshipScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const StudentSkillScalarFieldEnum: {
    studentId: 'studentId',
    skillId: 'skillId'
  };

  export type StudentSkillScalarFieldEnum = (typeof StudentSkillScalarFieldEnum)[keyof typeof StudentSkillScalarFieldEnum]


  export const InternshipSkillScalarFieldEnum: {
    internshipId: 'internshipId',
    skillId: 'skillId'
  };

  export type InternshipSkillScalarFieldEnum = (typeof InternshipSkillScalarFieldEnum)[keyof typeof InternshipSkillScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Mode'
   */
  export type EnumModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Mode'>
    


  /**
   * Reference to a field of type 'Mode[]'
   */
  export type ListEnumModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Mode[]'>
    


  /**
   * Reference to a field of type 'InternshipStatus'
   */
  export type EnumInternshipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InternshipStatus'>
    


  /**
   * Reference to a field of type 'InternshipStatus[]'
   */
  export type ListEnumInternshipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InternshipStatus[]'>
    


  /**
   * Reference to a field of type 'StudentInternshipStatus'
   */
  export type EnumStudentInternshipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StudentInternshipStatus'>
    


  /**
   * Reference to a field of type 'StudentInternshipStatus[]'
   */
  export type ListEnumStudentInternshipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StudentInternshipStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phoneNo?: StringNullableFilter<"User"> | string | null
    department?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profileUrl?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    userId?: StringFilter<"User"> | string
    mentor?: XOR<MentorNullableScalarRelationFilter, MentorWhereInput> | null
    placementOfficer?: XOR<PlacementOfficerNullableScalarRelationFilter, PlacementOfficerWhereInput> | null
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNo?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    role?: SortOrder
    profileUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    mentor?: MentorOrderByWithRelationInput
    placementOfficer?: PlacementOfficerOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    userId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    phoneNo?: StringNullableFilter<"User"> | string | null
    department?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profileUrl?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    mentor?: XOR<MentorNullableScalarRelationFilter, MentorWhereInput> | null
    placementOfficer?: XOR<PlacementOfficerNullableScalarRelationFilter, PlacementOfficerWhereInput> | null
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
  }, "id" | "email" | "userId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNo?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    role?: SortOrder
    profileUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phoneNo?: StringNullableWithAggregatesFilter<"User"> | string | null
    department?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    profileUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    userId?: StringWithAggregatesFilter<"User"> | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    userId?: StringFilter<"Student"> | string
    semester?: IntNullableFilter<"Student"> | number | null
    year?: IntNullableFilter<"Student"> | number | null
    cgpa?: DecimalNullableFilter<"Student"> | Decimal | DecimalJsLike | number | string | null
    resumeUrl?: StringNullableFilter<"Student"> | string | null
    profileCompleted?: BoolFilter<"Student"> | boolean
    mentorId?: StringNullableFilter<"Student"> | string | null
    savedInternships?: SavedInternshipListRelationFilter
    internships?: StudentInternshipListRelationFilter
    skills?: StudentSkillListRelationFilter
    mentor?: XOR<MentorNullableScalarRelationFilter, MentorWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StudentOrderByWithRelationInput = {
    userId?: SortOrder
    semester?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    cgpa?: SortOrderInput | SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    profileCompleted?: SortOrder
    mentorId?: SortOrderInput | SortOrder
    savedInternships?: SavedInternshipOrderByRelationAggregateInput
    internships?: StudentInternshipOrderByRelationAggregateInput
    skills?: StudentSkillOrderByRelationAggregateInput
    mentor?: MentorOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    semester?: IntNullableFilter<"Student"> | number | null
    year?: IntNullableFilter<"Student"> | number | null
    cgpa?: DecimalNullableFilter<"Student"> | Decimal | DecimalJsLike | number | string | null
    resumeUrl?: StringNullableFilter<"Student"> | string | null
    profileCompleted?: BoolFilter<"Student"> | boolean
    mentorId?: StringNullableFilter<"Student"> | string | null
    savedInternships?: SavedInternshipListRelationFilter
    internships?: StudentInternshipListRelationFilter
    skills?: StudentSkillListRelationFilter
    mentor?: XOR<MentorNullableScalarRelationFilter, MentorWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId">

  export type StudentOrderByWithAggregationInput = {
    userId?: SortOrder
    semester?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    cgpa?: SortOrderInput | SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    profileCompleted?: SortOrder
    mentorId?: SortOrderInput | SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Student"> | string
    semester?: IntNullableWithAggregatesFilter<"Student"> | number | null
    year?: IntNullableWithAggregatesFilter<"Student"> | number | null
    cgpa?: DecimalNullableWithAggregatesFilter<"Student"> | Decimal | DecimalJsLike | number | string | null
    resumeUrl?: StringNullableWithAggregatesFilter<"Student"> | string | null
    profileCompleted?: BoolWithAggregatesFilter<"Student"> | boolean
    mentorId?: StringNullableWithAggregatesFilter<"Student"> | string | null
  }

  export type MentorWhereInput = {
    AND?: MentorWhereInput | MentorWhereInput[]
    OR?: MentorWhereInput[]
    NOT?: MentorWhereInput | MentorWhereInput[]
    userId?: StringFilter<"Mentor"> | string
    designation?: StringNullableFilter<"Mentor"> | string | null
    experienceYears?: IntNullableFilter<"Mentor"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    students?: StudentListRelationFilter
  }

  export type MentorOrderByWithRelationInput = {
    userId?: SortOrder
    designation?: SortOrderInput | SortOrder
    experienceYears?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    students?: StudentOrderByRelationAggregateInput
  }

  export type MentorWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: MentorWhereInput | MentorWhereInput[]
    OR?: MentorWhereInput[]
    NOT?: MentorWhereInput | MentorWhereInput[]
    designation?: StringNullableFilter<"Mentor"> | string | null
    experienceYears?: IntNullableFilter<"Mentor"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    students?: StudentListRelationFilter
  }, "userId">

  export type MentorOrderByWithAggregationInput = {
    userId?: SortOrder
    designation?: SortOrderInput | SortOrder
    experienceYears?: SortOrderInput | SortOrder
    _count?: MentorCountOrderByAggregateInput
    _avg?: MentorAvgOrderByAggregateInput
    _max?: MentorMaxOrderByAggregateInput
    _min?: MentorMinOrderByAggregateInput
    _sum?: MentorSumOrderByAggregateInput
  }

  export type MentorScalarWhereWithAggregatesInput = {
    AND?: MentorScalarWhereWithAggregatesInput | MentorScalarWhereWithAggregatesInput[]
    OR?: MentorScalarWhereWithAggregatesInput[]
    NOT?: MentorScalarWhereWithAggregatesInput | MentorScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Mentor"> | string
    designation?: StringNullableWithAggregatesFilter<"Mentor"> | string | null
    experienceYears?: IntNullableWithAggregatesFilter<"Mentor"> | number | null
  }

  export type PlacementOfficerWhereInput = {
    AND?: PlacementOfficerWhereInput | PlacementOfficerWhereInput[]
    OR?: PlacementOfficerWhereInput[]
    NOT?: PlacementOfficerWhereInput | PlacementOfficerWhereInput[]
    userId?: StringFilter<"PlacementOfficer"> | string
    internships?: InternshipListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PlacementOfficerOrderByWithRelationInput = {
    userId?: SortOrder
    internships?: InternshipOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type PlacementOfficerWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: PlacementOfficerWhereInput | PlacementOfficerWhereInput[]
    OR?: PlacementOfficerWhereInput[]
    NOT?: PlacementOfficerWhereInput | PlacementOfficerWhereInput[]
    internships?: InternshipListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId">

  export type PlacementOfficerOrderByWithAggregationInput = {
    userId?: SortOrder
    _count?: PlacementOfficerCountOrderByAggregateInput
    _max?: PlacementOfficerMaxOrderByAggregateInput
    _min?: PlacementOfficerMinOrderByAggregateInput
  }

  export type PlacementOfficerScalarWhereWithAggregatesInput = {
    AND?: PlacementOfficerScalarWhereWithAggregatesInput | PlacementOfficerScalarWhereWithAggregatesInput[]
    OR?: PlacementOfficerScalarWhereWithAggregatesInput[]
    NOT?: PlacementOfficerScalarWhereWithAggregatesInput | PlacementOfficerScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"PlacementOfficer"> | string
  }

  export type InternshipWhereInput = {
    AND?: InternshipWhereInput | InternshipWhereInput[]
    OR?: InternshipWhereInput[]
    NOT?: InternshipWhereInput | InternshipWhereInput[]
    id?: StringFilter<"Internship"> | string
    title?: StringFilter<"Internship"> | string
    companyName?: StringNullableFilter<"Internship"> | string | null
    companyUrl?: StringNullableFilter<"Internship"> | string | null
    companyLogo?: StringNullableFilter<"Internship"> | string | null
    description?: StringNullableFilter<"Internship"> | string | null
    location?: StringNullableFilter<"Internship"> | string | null
    mode?: EnumModeFilter<"Internship"> | $Enums.Mode
    duration?: StringFilter<"Internship"> | string
    applicationDeadline?: DateTimeNullableFilter<"Internship"> | Date | string | null
    requirement?: StringFilter<"Internship"> | string
    salaryPackage?: StringNullableFilter<"Internship"> | string | null
    minCgpa?: DecimalNullableFilter<"Internship"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumInternshipStatusFilter<"Internship"> | $Enums.InternshipStatus
    createdAt?: DateTimeFilter<"Internship"> | Date | string
    postedById?: StringFilter<"Internship"> | string
    skills?: InternshipSkillListRelationFilter
    postedBy?: XOR<PlacementOfficerScalarRelationFilter, PlacementOfficerWhereInput>
    savedBy?: SavedInternshipListRelationFilter
    applicants?: StudentInternshipListRelationFilter
  }

  export type InternshipOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    companyName?: SortOrderInput | SortOrder
    companyUrl?: SortOrderInput | SortOrder
    companyLogo?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    mode?: SortOrder
    duration?: SortOrder
    applicationDeadline?: SortOrderInput | SortOrder
    requirement?: SortOrder
    salaryPackage?: SortOrderInput | SortOrder
    minCgpa?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    postedById?: SortOrder
    skills?: InternshipSkillOrderByRelationAggregateInput
    postedBy?: PlacementOfficerOrderByWithRelationInput
    savedBy?: SavedInternshipOrderByRelationAggregateInput
    applicants?: StudentInternshipOrderByRelationAggregateInput
  }

  export type InternshipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InternshipWhereInput | InternshipWhereInput[]
    OR?: InternshipWhereInput[]
    NOT?: InternshipWhereInput | InternshipWhereInput[]
    title?: StringFilter<"Internship"> | string
    companyName?: StringNullableFilter<"Internship"> | string | null
    companyUrl?: StringNullableFilter<"Internship"> | string | null
    companyLogo?: StringNullableFilter<"Internship"> | string | null
    description?: StringNullableFilter<"Internship"> | string | null
    location?: StringNullableFilter<"Internship"> | string | null
    mode?: EnumModeFilter<"Internship"> | $Enums.Mode
    duration?: StringFilter<"Internship"> | string
    applicationDeadline?: DateTimeNullableFilter<"Internship"> | Date | string | null
    requirement?: StringFilter<"Internship"> | string
    salaryPackage?: StringNullableFilter<"Internship"> | string | null
    minCgpa?: DecimalNullableFilter<"Internship"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumInternshipStatusFilter<"Internship"> | $Enums.InternshipStatus
    createdAt?: DateTimeFilter<"Internship"> | Date | string
    postedById?: StringFilter<"Internship"> | string
    skills?: InternshipSkillListRelationFilter
    postedBy?: XOR<PlacementOfficerScalarRelationFilter, PlacementOfficerWhereInput>
    savedBy?: SavedInternshipListRelationFilter
    applicants?: StudentInternshipListRelationFilter
  }, "id">

  export type InternshipOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    companyName?: SortOrderInput | SortOrder
    companyUrl?: SortOrderInput | SortOrder
    companyLogo?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    mode?: SortOrder
    duration?: SortOrder
    applicationDeadline?: SortOrderInput | SortOrder
    requirement?: SortOrder
    salaryPackage?: SortOrderInput | SortOrder
    minCgpa?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    postedById?: SortOrder
    _count?: InternshipCountOrderByAggregateInput
    _avg?: InternshipAvgOrderByAggregateInput
    _max?: InternshipMaxOrderByAggregateInput
    _min?: InternshipMinOrderByAggregateInput
    _sum?: InternshipSumOrderByAggregateInput
  }

  export type InternshipScalarWhereWithAggregatesInput = {
    AND?: InternshipScalarWhereWithAggregatesInput | InternshipScalarWhereWithAggregatesInput[]
    OR?: InternshipScalarWhereWithAggregatesInput[]
    NOT?: InternshipScalarWhereWithAggregatesInput | InternshipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Internship"> | string
    title?: StringWithAggregatesFilter<"Internship"> | string
    companyName?: StringNullableWithAggregatesFilter<"Internship"> | string | null
    companyUrl?: StringNullableWithAggregatesFilter<"Internship"> | string | null
    companyLogo?: StringNullableWithAggregatesFilter<"Internship"> | string | null
    description?: StringNullableWithAggregatesFilter<"Internship"> | string | null
    location?: StringNullableWithAggregatesFilter<"Internship"> | string | null
    mode?: EnumModeWithAggregatesFilter<"Internship"> | $Enums.Mode
    duration?: StringWithAggregatesFilter<"Internship"> | string
    applicationDeadline?: DateTimeNullableWithAggregatesFilter<"Internship"> | Date | string | null
    requirement?: StringWithAggregatesFilter<"Internship"> | string
    salaryPackage?: StringNullableWithAggregatesFilter<"Internship"> | string | null
    minCgpa?: DecimalNullableWithAggregatesFilter<"Internship"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumInternshipStatusWithAggregatesFilter<"Internship"> | $Enums.InternshipStatus
    createdAt?: DateTimeWithAggregatesFilter<"Internship"> | Date | string
    postedById?: StringWithAggregatesFilter<"Internship"> | string
  }

  export type StudentInternshipWhereInput = {
    AND?: StudentInternshipWhereInput | StudentInternshipWhereInput[]
    OR?: StudentInternshipWhereInput[]
    NOT?: StudentInternshipWhereInput | StudentInternshipWhereInput[]
    id?: StringFilter<"StudentInternship"> | string
    studentId?: StringFilter<"StudentInternship"> | string
    internshipId?: StringFilter<"StudentInternship"> | string
    status?: EnumStudentInternshipStatusFilter<"StudentInternship"> | $Enums.StudentInternshipStatus
    certificateUrl?: StringNullableFilter<"StudentInternship"> | string | null
    appliedAt?: DateTimeFilter<"StudentInternship"> | Date | string
    internship?: XOR<InternshipScalarRelationFilter, InternshipWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type StudentInternshipOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    internshipId?: SortOrder
    status?: SortOrder
    certificateUrl?: SortOrderInput | SortOrder
    appliedAt?: SortOrder
    internship?: InternshipOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
  }

  export type StudentInternshipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId_internshipId?: StudentInternshipStudentIdInternshipIdCompoundUniqueInput
    AND?: StudentInternshipWhereInput | StudentInternshipWhereInput[]
    OR?: StudentInternshipWhereInput[]
    NOT?: StudentInternshipWhereInput | StudentInternshipWhereInput[]
    studentId?: StringFilter<"StudentInternship"> | string
    internshipId?: StringFilter<"StudentInternship"> | string
    status?: EnumStudentInternshipStatusFilter<"StudentInternship"> | $Enums.StudentInternshipStatus
    certificateUrl?: StringNullableFilter<"StudentInternship"> | string | null
    appliedAt?: DateTimeFilter<"StudentInternship"> | Date | string
    internship?: XOR<InternshipScalarRelationFilter, InternshipWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id" | "studentId_internshipId">

  export type StudentInternshipOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    internshipId?: SortOrder
    status?: SortOrder
    certificateUrl?: SortOrderInput | SortOrder
    appliedAt?: SortOrder
    _count?: StudentInternshipCountOrderByAggregateInput
    _max?: StudentInternshipMaxOrderByAggregateInput
    _min?: StudentInternshipMinOrderByAggregateInput
  }

  export type StudentInternshipScalarWhereWithAggregatesInput = {
    AND?: StudentInternshipScalarWhereWithAggregatesInput | StudentInternshipScalarWhereWithAggregatesInput[]
    OR?: StudentInternshipScalarWhereWithAggregatesInput[]
    NOT?: StudentInternshipScalarWhereWithAggregatesInput | StudentInternshipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentInternship"> | string
    studentId?: StringWithAggregatesFilter<"StudentInternship"> | string
    internshipId?: StringWithAggregatesFilter<"StudentInternship"> | string
    status?: EnumStudentInternshipStatusWithAggregatesFilter<"StudentInternship"> | $Enums.StudentInternshipStatus
    certificateUrl?: StringNullableWithAggregatesFilter<"StudentInternship"> | string | null
    appliedAt?: DateTimeWithAggregatesFilter<"StudentInternship"> | Date | string
  }

  export type SavedInternshipWhereInput = {
    AND?: SavedInternshipWhereInput | SavedInternshipWhereInput[]
    OR?: SavedInternshipWhereInput[]
    NOT?: SavedInternshipWhereInput | SavedInternshipWhereInput[]
    studentId?: StringFilter<"SavedInternship"> | string
    internshipId?: StringFilter<"SavedInternship"> | string
    savedAt?: DateTimeFilter<"SavedInternship"> | Date | string
    internship?: XOR<InternshipScalarRelationFilter, InternshipWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type SavedInternshipOrderByWithRelationInput = {
    studentId?: SortOrder
    internshipId?: SortOrder
    savedAt?: SortOrder
    internship?: InternshipOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
  }

  export type SavedInternshipWhereUniqueInput = Prisma.AtLeast<{
    studentId_internshipId?: SavedInternshipStudentIdInternshipIdCompoundUniqueInput
    AND?: SavedInternshipWhereInput | SavedInternshipWhereInput[]
    OR?: SavedInternshipWhereInput[]
    NOT?: SavedInternshipWhereInput | SavedInternshipWhereInput[]
    studentId?: StringFilter<"SavedInternship"> | string
    internshipId?: StringFilter<"SavedInternship"> | string
    savedAt?: DateTimeFilter<"SavedInternship"> | Date | string
    internship?: XOR<InternshipScalarRelationFilter, InternshipWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "studentId_internshipId">

  export type SavedInternshipOrderByWithAggregationInput = {
    studentId?: SortOrder
    internshipId?: SortOrder
    savedAt?: SortOrder
    _count?: SavedInternshipCountOrderByAggregateInput
    _max?: SavedInternshipMaxOrderByAggregateInput
    _min?: SavedInternshipMinOrderByAggregateInput
  }

  export type SavedInternshipScalarWhereWithAggregatesInput = {
    AND?: SavedInternshipScalarWhereWithAggregatesInput | SavedInternshipScalarWhereWithAggregatesInput[]
    OR?: SavedInternshipScalarWhereWithAggregatesInput[]
    NOT?: SavedInternshipScalarWhereWithAggregatesInput | SavedInternshipScalarWhereWithAggregatesInput[]
    studentId?: StringWithAggregatesFilter<"SavedInternship"> | string
    internshipId?: StringWithAggregatesFilter<"SavedInternship"> | string
    savedAt?: DateTimeWithAggregatesFilter<"SavedInternship"> | Date | string
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    internships?: InternshipSkillListRelationFilter
    students?: StudentSkillListRelationFilter
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    internships?: InternshipSkillOrderByRelationAggregateInput
    students?: StudentSkillOrderByRelationAggregateInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    internships?: InternshipSkillListRelationFilter
    students?: StudentSkillListRelationFilter
  }, "id" | "name">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skill"> | string
    name?: StringWithAggregatesFilter<"Skill"> | string
  }

  export type StudentSkillWhereInput = {
    AND?: StudentSkillWhereInput | StudentSkillWhereInput[]
    OR?: StudentSkillWhereInput[]
    NOT?: StudentSkillWhereInput | StudentSkillWhereInput[]
    studentId?: StringFilter<"StudentSkill"> | string
    skillId?: StringFilter<"StudentSkill"> | string
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type StudentSkillOrderByWithRelationInput = {
    studentId?: SortOrder
    skillId?: SortOrder
    skill?: SkillOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
  }

  export type StudentSkillWhereUniqueInput = Prisma.AtLeast<{
    studentId_skillId?: StudentSkillStudentIdSkillIdCompoundUniqueInput
    AND?: StudentSkillWhereInput | StudentSkillWhereInput[]
    OR?: StudentSkillWhereInput[]
    NOT?: StudentSkillWhereInput | StudentSkillWhereInput[]
    studentId?: StringFilter<"StudentSkill"> | string
    skillId?: StringFilter<"StudentSkill"> | string
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "studentId_skillId">

  export type StudentSkillOrderByWithAggregationInput = {
    studentId?: SortOrder
    skillId?: SortOrder
    _count?: StudentSkillCountOrderByAggregateInput
    _max?: StudentSkillMaxOrderByAggregateInput
    _min?: StudentSkillMinOrderByAggregateInput
  }

  export type StudentSkillScalarWhereWithAggregatesInput = {
    AND?: StudentSkillScalarWhereWithAggregatesInput | StudentSkillScalarWhereWithAggregatesInput[]
    OR?: StudentSkillScalarWhereWithAggregatesInput[]
    NOT?: StudentSkillScalarWhereWithAggregatesInput | StudentSkillScalarWhereWithAggregatesInput[]
    studentId?: StringWithAggregatesFilter<"StudentSkill"> | string
    skillId?: StringWithAggregatesFilter<"StudentSkill"> | string
  }

  export type InternshipSkillWhereInput = {
    AND?: InternshipSkillWhereInput | InternshipSkillWhereInput[]
    OR?: InternshipSkillWhereInput[]
    NOT?: InternshipSkillWhereInput | InternshipSkillWhereInput[]
    internshipId?: StringFilter<"InternshipSkill"> | string
    skillId?: StringFilter<"InternshipSkill"> | string
    internship?: XOR<InternshipScalarRelationFilter, InternshipWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }

  export type InternshipSkillOrderByWithRelationInput = {
    internshipId?: SortOrder
    skillId?: SortOrder
    internship?: InternshipOrderByWithRelationInput
    skill?: SkillOrderByWithRelationInput
  }

  export type InternshipSkillWhereUniqueInput = Prisma.AtLeast<{
    internshipId_skillId?: InternshipSkillInternshipIdSkillIdCompoundUniqueInput
    AND?: InternshipSkillWhereInput | InternshipSkillWhereInput[]
    OR?: InternshipSkillWhereInput[]
    NOT?: InternshipSkillWhereInput | InternshipSkillWhereInput[]
    internshipId?: StringFilter<"InternshipSkill"> | string
    skillId?: StringFilter<"InternshipSkill"> | string
    internship?: XOR<InternshipScalarRelationFilter, InternshipWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }, "internshipId_skillId">

  export type InternshipSkillOrderByWithAggregationInput = {
    internshipId?: SortOrder
    skillId?: SortOrder
    _count?: InternshipSkillCountOrderByAggregateInput
    _max?: InternshipSkillMaxOrderByAggregateInput
    _min?: InternshipSkillMinOrderByAggregateInput
  }

  export type InternshipSkillScalarWhereWithAggregatesInput = {
    AND?: InternshipSkillScalarWhereWithAggregatesInput | InternshipSkillScalarWhereWithAggregatesInput[]
    OR?: InternshipSkillScalarWhereWithAggregatesInput[]
    NOT?: InternshipSkillScalarWhereWithAggregatesInput | InternshipSkillScalarWhereWithAggregatesInput[]
    internshipId?: StringWithAggregatesFilter<"InternshipSkill"> | string
    skillId?: StringWithAggregatesFilter<"InternshipSkill"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    phoneNo?: string | null
    department?: string | null
    role: $Enums.Role
    profileUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    userId: string
    mentor?: MentorCreateNestedOneWithoutUserInput
    placementOfficer?: PlacementOfficerCreateNestedOneWithoutUserInput
    student?: StudentCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phoneNo?: string | null
    department?: string | null
    role: $Enums.Role
    profileUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    userId: string
    mentor?: MentorUncheckedCreateNestedOneWithoutUserInput
    placementOfficer?: PlacementOfficerUncheckedCreateNestedOneWithoutUserInput
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    mentor?: MentorUpdateOneWithoutUserNestedInput
    placementOfficer?: PlacementOfficerUpdateOneWithoutUserNestedInput
    student?: StudentUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    mentor?: MentorUncheckedUpdateOneWithoutUserNestedInput
    placementOfficer?: PlacementOfficerUncheckedUpdateOneWithoutUserNestedInput
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    phoneNo?: string | null
    department?: string | null
    role: $Enums.Role
    profileUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    userId: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCreateInput = {
    semester?: number | null
    year?: number | null
    cgpa?: Decimal | DecimalJsLike | number | string | null
    resumeUrl?: string | null
    profileCompleted?: boolean
    savedInternships?: SavedInternshipCreateNestedManyWithoutStudentInput
    internships?: StudentInternshipCreateNestedManyWithoutStudentInput
    skills?: StudentSkillCreateNestedManyWithoutStudentInput
    mentor?: MentorCreateNestedOneWithoutStudentsInput
    user: UserCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    userId: string
    semester?: number | null
    year?: number | null
    cgpa?: Decimal | DecimalJsLike | number | string | null
    resumeUrl?: string | null
    profileCompleted?: boolean
    mentorId?: string | null
    savedInternships?: SavedInternshipUncheckedCreateNestedManyWithoutStudentInput
    internships?: StudentInternshipUncheckedCreateNestedManyWithoutStudentInput
    skills?: StudentSkillUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    cgpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    savedInternships?: SavedInternshipUpdateManyWithoutStudentNestedInput
    internships?: StudentInternshipUpdateManyWithoutStudentNestedInput
    skills?: StudentSkillUpdateManyWithoutStudentNestedInput
    mentor?: MentorUpdateOneWithoutStudentsNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    cgpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    mentorId?: NullableStringFieldUpdateOperationsInput | string | null
    savedInternships?: SavedInternshipUncheckedUpdateManyWithoutStudentNestedInput
    internships?: StudentInternshipUncheckedUpdateManyWithoutStudentNestedInput
    skills?: StudentSkillUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    userId: string
    semester?: number | null
    year?: number | null
    cgpa?: Decimal | DecimalJsLike | number | string | null
    resumeUrl?: string | null
    profileCompleted?: boolean
    mentorId?: string | null
  }

  export type StudentUpdateManyMutationInput = {
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    cgpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    cgpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    mentorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MentorCreateInput = {
    designation?: string | null
    experienceYears?: number | null
    user: UserCreateNestedOneWithoutMentorInput
    students?: StudentCreateNestedManyWithoutMentorInput
  }

  export type MentorUncheckedCreateInput = {
    userId: string
    designation?: string | null
    experienceYears?: number | null
    students?: StudentUncheckedCreateNestedManyWithoutMentorInput
  }

  export type MentorUpdateInput = {
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutMentorNestedInput
    students?: StudentUpdateManyWithoutMentorNestedInput
  }

  export type MentorUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    students?: StudentUncheckedUpdateManyWithoutMentorNestedInput
  }

  export type MentorCreateManyInput = {
    userId: string
    designation?: string | null
    experienceYears?: number | null
  }

  export type MentorUpdateManyMutationInput = {
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MentorUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlacementOfficerCreateInput = {
    internships?: InternshipCreateNestedManyWithoutPostedByInput
    user: UserCreateNestedOneWithoutPlacementOfficerInput
  }

  export type PlacementOfficerUncheckedCreateInput = {
    userId: string
    internships?: InternshipUncheckedCreateNestedManyWithoutPostedByInput
  }

  export type PlacementOfficerUpdateInput = {
    internships?: InternshipUpdateManyWithoutPostedByNestedInput
    user?: UserUpdateOneRequiredWithoutPlacementOfficerNestedInput
  }

  export type PlacementOfficerUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    internships?: InternshipUncheckedUpdateManyWithoutPostedByNestedInput
  }

  export type PlacementOfficerCreateManyInput = {
    userId: string
  }

  export type PlacementOfficerUpdateManyMutationInput = {

  }

  export type PlacementOfficerUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type InternshipCreateInput = {
    id?: string
    title: string
    companyName?: string | null
    companyUrl?: string | null
    companyLogo?: string | null
    description?: string | null
    location?: string | null
    mode: $Enums.Mode
    duration: string
    applicationDeadline?: Date | string | null
    requirement: string
    salaryPackage?: string | null
    minCgpa?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.InternshipStatus
    createdAt?: Date | string
    skills?: InternshipSkillCreateNestedManyWithoutInternshipInput
    postedBy: PlacementOfficerCreateNestedOneWithoutInternshipsInput
    savedBy?: SavedInternshipCreateNestedManyWithoutInternshipInput
    applicants?: StudentInternshipCreateNestedManyWithoutInternshipInput
  }

  export type InternshipUncheckedCreateInput = {
    id?: string
    title: string
    companyName?: string | null
    companyUrl?: string | null
    companyLogo?: string | null
    description?: string | null
    location?: string | null
    mode: $Enums.Mode
    duration: string
    applicationDeadline?: Date | string | null
    requirement: string
    salaryPackage?: string | null
    minCgpa?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.InternshipStatus
    createdAt?: Date | string
    postedById: string
    skills?: InternshipSkillUncheckedCreateNestedManyWithoutInternshipInput
    savedBy?: SavedInternshipUncheckedCreateNestedManyWithoutInternshipInput
    applicants?: StudentInternshipUncheckedCreateNestedManyWithoutInternshipInput
  }

  export type InternshipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    mode?: EnumModeFieldUpdateOperationsInput | $Enums.Mode
    duration?: StringFieldUpdateOperationsInput | string
    applicationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requirement?: StringFieldUpdateOperationsInput | string
    salaryPackage?: NullableStringFieldUpdateOperationsInput | string | null
    minCgpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumInternshipStatusFieldUpdateOperationsInput | $Enums.InternshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: InternshipSkillUpdateManyWithoutInternshipNestedInput
    postedBy?: PlacementOfficerUpdateOneRequiredWithoutInternshipsNestedInput
    savedBy?: SavedInternshipUpdateManyWithoutInternshipNestedInput
    applicants?: StudentInternshipUpdateManyWithoutInternshipNestedInput
  }

  export type InternshipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    mode?: EnumModeFieldUpdateOperationsInput | $Enums.Mode
    duration?: StringFieldUpdateOperationsInput | string
    applicationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requirement?: StringFieldUpdateOperationsInput | string
    salaryPackage?: NullableStringFieldUpdateOperationsInput | string | null
    minCgpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumInternshipStatusFieldUpdateOperationsInput | $Enums.InternshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedById?: StringFieldUpdateOperationsInput | string
    skills?: InternshipSkillUncheckedUpdateManyWithoutInternshipNestedInput
    savedBy?: SavedInternshipUncheckedUpdateManyWithoutInternshipNestedInput
    applicants?: StudentInternshipUncheckedUpdateManyWithoutInternshipNestedInput
  }

  export type InternshipCreateManyInput = {
    id?: string
    title: string
    companyName?: string | null
    companyUrl?: string | null
    companyLogo?: string | null
    description?: string | null
    location?: string | null
    mode: $Enums.Mode
    duration: string
    applicationDeadline?: Date | string | null
    requirement: string
    salaryPackage?: string | null
    minCgpa?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.InternshipStatus
    createdAt?: Date | string
    postedById: string
  }

  export type InternshipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    mode?: EnumModeFieldUpdateOperationsInput | $Enums.Mode
    duration?: StringFieldUpdateOperationsInput | string
    applicationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requirement?: StringFieldUpdateOperationsInput | string
    salaryPackage?: NullableStringFieldUpdateOperationsInput | string | null
    minCgpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumInternshipStatusFieldUpdateOperationsInput | $Enums.InternshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InternshipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    mode?: EnumModeFieldUpdateOperationsInput | $Enums.Mode
    duration?: StringFieldUpdateOperationsInput | string
    applicationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requirement?: StringFieldUpdateOperationsInput | string
    salaryPackage?: NullableStringFieldUpdateOperationsInput | string | null
    minCgpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumInternshipStatusFieldUpdateOperationsInput | $Enums.InternshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedById?: StringFieldUpdateOperationsInput | string
  }

  export type StudentInternshipCreateInput = {
    id?: string
    status?: $Enums.StudentInternshipStatus
    certificateUrl?: string | null
    appliedAt?: Date | string
    internship: InternshipCreateNestedOneWithoutApplicantsInput
    student: StudentCreateNestedOneWithoutInternshipsInput
  }

  export type StudentInternshipUncheckedCreateInput = {
    id?: string
    studentId: string
    internshipId: string
    status?: $Enums.StudentInternshipStatus
    certificateUrl?: string | null
    appliedAt?: Date | string
  }

  export type StudentInternshipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStudentInternshipStatusFieldUpdateOperationsInput | $Enums.StudentInternshipStatus
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internship?: InternshipUpdateOneRequiredWithoutApplicantsNestedInput
    student?: StudentUpdateOneRequiredWithoutInternshipsNestedInput
  }

  export type StudentInternshipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    internshipId?: StringFieldUpdateOperationsInput | string
    status?: EnumStudentInternshipStatusFieldUpdateOperationsInput | $Enums.StudentInternshipStatus
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentInternshipCreateManyInput = {
    id?: string
    studentId: string
    internshipId: string
    status?: $Enums.StudentInternshipStatus
    certificateUrl?: string | null
    appliedAt?: Date | string
  }

  export type StudentInternshipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStudentInternshipStatusFieldUpdateOperationsInput | $Enums.StudentInternshipStatus
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentInternshipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    internshipId?: StringFieldUpdateOperationsInput | string
    status?: EnumStudentInternshipStatusFieldUpdateOperationsInput | $Enums.StudentInternshipStatus
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedInternshipCreateInput = {
    savedAt?: Date | string
    internship: InternshipCreateNestedOneWithoutSavedByInput
    student: StudentCreateNestedOneWithoutSavedInternshipsInput
  }

  export type SavedInternshipUncheckedCreateInput = {
    studentId: string
    internshipId: string
    savedAt?: Date | string
  }

  export type SavedInternshipUpdateInput = {
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internship?: InternshipUpdateOneRequiredWithoutSavedByNestedInput
    student?: StudentUpdateOneRequiredWithoutSavedInternshipsNestedInput
  }

  export type SavedInternshipUncheckedUpdateInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    internshipId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedInternshipCreateManyInput = {
    studentId: string
    internshipId: string
    savedAt?: Date | string
  }

  export type SavedInternshipUpdateManyMutationInput = {
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedInternshipUncheckedUpdateManyInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    internshipId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateInput = {
    id?: string
    name: string
    internships?: InternshipSkillCreateNestedManyWithoutSkillInput
    students?: StudentSkillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateInput = {
    id?: string
    name: string
    internships?: InternshipSkillUncheckedCreateNestedManyWithoutSkillInput
    students?: StudentSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    internships?: InternshipSkillUpdateManyWithoutSkillNestedInput
    students?: StudentSkillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    internships?: InternshipSkillUncheckedUpdateManyWithoutSkillNestedInput
    students?: StudentSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillCreateManyInput = {
    id?: string
    name: string
  }

  export type SkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StudentSkillCreateInput = {
    skill: SkillCreateNestedOneWithoutStudentsInput
    student: StudentCreateNestedOneWithoutSkillsInput
  }

  export type StudentSkillUncheckedCreateInput = {
    studentId: string
    skillId: string
  }

  export type StudentSkillUpdateInput = {
    skill?: SkillUpdateOneRequiredWithoutStudentsNestedInput
    student?: StudentUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type StudentSkillUncheckedUpdateInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentSkillCreateManyInput = {
    studentId: string
    skillId: string
  }

  export type StudentSkillUpdateManyMutationInput = {

  }

  export type StudentSkillUncheckedUpdateManyInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
  }

  export type InternshipSkillCreateInput = {
    internship: InternshipCreateNestedOneWithoutSkillsInput
    skill: SkillCreateNestedOneWithoutInternshipsInput
  }

  export type InternshipSkillUncheckedCreateInput = {
    internshipId: string
    skillId: string
  }

  export type InternshipSkillUpdateInput = {
    internship?: InternshipUpdateOneRequiredWithoutSkillsNestedInput
    skill?: SkillUpdateOneRequiredWithoutInternshipsNestedInput
  }

  export type InternshipSkillUncheckedUpdateInput = {
    internshipId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
  }

  export type InternshipSkillCreateManyInput = {
    internshipId: string
    skillId: string
  }

  export type InternshipSkillUpdateManyMutationInput = {

  }

  export type InternshipSkillUncheckedUpdateManyInput = {
    internshipId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MentorNullableScalarRelationFilter = {
    is?: MentorWhereInput | null
    isNot?: MentorWhereInput | null
  }

  export type PlacementOfficerNullableScalarRelationFilter = {
    is?: PlacementOfficerWhereInput | null
    isNot?: PlacementOfficerWhereInput | null
  }

  export type StudentNullableScalarRelationFilter = {
    is?: StudentWhereInput | null
    isNot?: StudentWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNo?: SortOrder
    department?: SortOrder
    role?: SortOrder
    profileUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNo?: SortOrder
    department?: SortOrder
    role?: SortOrder
    profileUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNo?: SortOrder
    department?: SortOrder
    role?: SortOrder
    profileUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type SavedInternshipListRelationFilter = {
    every?: SavedInternshipWhereInput
    some?: SavedInternshipWhereInput
    none?: SavedInternshipWhereInput
  }

  export type StudentInternshipListRelationFilter = {
    every?: StudentInternshipWhereInput
    some?: StudentInternshipWhereInput
    none?: StudentInternshipWhereInput
  }

  export type StudentSkillListRelationFilter = {
    every?: StudentSkillWhereInput
    some?: StudentSkillWhereInput
    none?: StudentSkillWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SavedInternshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentInternshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    userId?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    cgpa?: SortOrder
    resumeUrl?: SortOrder
    profileCompleted?: SortOrder
    mentorId?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    semester?: SortOrder
    year?: SortOrder
    cgpa?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    userId?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    cgpa?: SortOrder
    resumeUrl?: SortOrder
    profileCompleted?: SortOrder
    mentorId?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    userId?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    cgpa?: SortOrder
    resumeUrl?: SortOrder
    profileCompleted?: SortOrder
    mentorId?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    semester?: SortOrder
    year?: SortOrder
    cgpa?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MentorCountOrderByAggregateInput = {
    userId?: SortOrder
    designation?: SortOrder
    experienceYears?: SortOrder
  }

  export type MentorAvgOrderByAggregateInput = {
    experienceYears?: SortOrder
  }

  export type MentorMaxOrderByAggregateInput = {
    userId?: SortOrder
    designation?: SortOrder
    experienceYears?: SortOrder
  }

  export type MentorMinOrderByAggregateInput = {
    userId?: SortOrder
    designation?: SortOrder
    experienceYears?: SortOrder
  }

  export type MentorSumOrderByAggregateInput = {
    experienceYears?: SortOrder
  }

  export type InternshipListRelationFilter = {
    every?: InternshipWhereInput
    some?: InternshipWhereInput
    none?: InternshipWhereInput
  }

  export type InternshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlacementOfficerCountOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type PlacementOfficerMaxOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type PlacementOfficerMinOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type EnumModeFilter<$PrismaModel = never> = {
    equals?: $Enums.Mode | EnumModeFieldRefInput<$PrismaModel>
    in?: $Enums.Mode[] | ListEnumModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Mode[] | ListEnumModeFieldRefInput<$PrismaModel>
    not?: NestedEnumModeFilter<$PrismaModel> | $Enums.Mode
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumInternshipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InternshipStatus | EnumInternshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InternshipStatus[] | ListEnumInternshipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InternshipStatus[] | ListEnumInternshipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInternshipStatusFilter<$PrismaModel> | $Enums.InternshipStatus
  }

  export type InternshipSkillListRelationFilter = {
    every?: InternshipSkillWhereInput
    some?: InternshipSkillWhereInput
    none?: InternshipSkillWhereInput
  }

  export type PlacementOfficerScalarRelationFilter = {
    is?: PlacementOfficerWhereInput
    isNot?: PlacementOfficerWhereInput
  }

  export type InternshipSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InternshipCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    companyName?: SortOrder
    companyUrl?: SortOrder
    companyLogo?: SortOrder
    description?: SortOrder
    location?: SortOrder
    mode?: SortOrder
    duration?: SortOrder
    applicationDeadline?: SortOrder
    requirement?: SortOrder
    salaryPackage?: SortOrder
    minCgpa?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    postedById?: SortOrder
  }

  export type InternshipAvgOrderByAggregateInput = {
    minCgpa?: SortOrder
  }

  export type InternshipMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    companyName?: SortOrder
    companyUrl?: SortOrder
    companyLogo?: SortOrder
    description?: SortOrder
    location?: SortOrder
    mode?: SortOrder
    duration?: SortOrder
    applicationDeadline?: SortOrder
    requirement?: SortOrder
    salaryPackage?: SortOrder
    minCgpa?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    postedById?: SortOrder
  }

  export type InternshipMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    companyName?: SortOrder
    companyUrl?: SortOrder
    companyLogo?: SortOrder
    description?: SortOrder
    location?: SortOrder
    mode?: SortOrder
    duration?: SortOrder
    applicationDeadline?: SortOrder
    requirement?: SortOrder
    salaryPackage?: SortOrder
    minCgpa?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    postedById?: SortOrder
  }

  export type InternshipSumOrderByAggregateInput = {
    minCgpa?: SortOrder
  }

  export type EnumModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Mode | EnumModeFieldRefInput<$PrismaModel>
    in?: $Enums.Mode[] | ListEnumModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Mode[] | ListEnumModeFieldRefInput<$PrismaModel>
    not?: NestedEnumModeWithAggregatesFilter<$PrismaModel> | $Enums.Mode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModeFilter<$PrismaModel>
    _max?: NestedEnumModeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumInternshipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InternshipStatus | EnumInternshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InternshipStatus[] | ListEnumInternshipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InternshipStatus[] | ListEnumInternshipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInternshipStatusWithAggregatesFilter<$PrismaModel> | $Enums.InternshipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInternshipStatusFilter<$PrismaModel>
    _max?: NestedEnumInternshipStatusFilter<$PrismaModel>
  }

  export type EnumStudentInternshipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentInternshipStatus | EnumStudentInternshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentInternshipStatus[] | ListEnumStudentInternshipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudentInternshipStatus[] | ListEnumStudentInternshipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStudentInternshipStatusFilter<$PrismaModel> | $Enums.StudentInternshipStatus
  }

  export type InternshipScalarRelationFilter = {
    is?: InternshipWhereInput
    isNot?: InternshipWhereInput
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type StudentInternshipStudentIdInternshipIdCompoundUniqueInput = {
    studentId: string
    internshipId: string
  }

  export type StudentInternshipCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    internshipId?: SortOrder
    status?: SortOrder
    certificateUrl?: SortOrder
    appliedAt?: SortOrder
  }

  export type StudentInternshipMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    internshipId?: SortOrder
    status?: SortOrder
    certificateUrl?: SortOrder
    appliedAt?: SortOrder
  }

  export type StudentInternshipMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    internshipId?: SortOrder
    status?: SortOrder
    certificateUrl?: SortOrder
    appliedAt?: SortOrder
  }

  export type EnumStudentInternshipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentInternshipStatus | EnumStudentInternshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentInternshipStatus[] | ListEnumStudentInternshipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudentInternshipStatus[] | ListEnumStudentInternshipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStudentInternshipStatusWithAggregatesFilter<$PrismaModel> | $Enums.StudentInternshipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStudentInternshipStatusFilter<$PrismaModel>
    _max?: NestedEnumStudentInternshipStatusFilter<$PrismaModel>
  }

  export type SavedInternshipStudentIdInternshipIdCompoundUniqueInput = {
    studentId: string
    internshipId: string
  }

  export type SavedInternshipCountOrderByAggregateInput = {
    studentId?: SortOrder
    internshipId?: SortOrder
    savedAt?: SortOrder
  }

  export type SavedInternshipMaxOrderByAggregateInput = {
    studentId?: SortOrder
    internshipId?: SortOrder
    savedAt?: SortOrder
  }

  export type SavedInternshipMinOrderByAggregateInput = {
    studentId?: SortOrder
    internshipId?: SortOrder
    savedAt?: SortOrder
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SkillScalarRelationFilter = {
    is?: SkillWhereInput
    isNot?: SkillWhereInput
  }

  export type StudentSkillStudentIdSkillIdCompoundUniqueInput = {
    studentId: string
    skillId: string
  }

  export type StudentSkillCountOrderByAggregateInput = {
    studentId?: SortOrder
    skillId?: SortOrder
  }

  export type StudentSkillMaxOrderByAggregateInput = {
    studentId?: SortOrder
    skillId?: SortOrder
  }

  export type StudentSkillMinOrderByAggregateInput = {
    studentId?: SortOrder
    skillId?: SortOrder
  }

  export type InternshipSkillInternshipIdSkillIdCompoundUniqueInput = {
    internshipId: string
    skillId: string
  }

  export type InternshipSkillCountOrderByAggregateInput = {
    internshipId?: SortOrder
    skillId?: SortOrder
  }

  export type InternshipSkillMaxOrderByAggregateInput = {
    internshipId?: SortOrder
    skillId?: SortOrder
  }

  export type InternshipSkillMinOrderByAggregateInput = {
    internshipId?: SortOrder
    skillId?: SortOrder
  }

  export type MentorCreateNestedOneWithoutUserInput = {
    create?: XOR<MentorCreateWithoutUserInput, MentorUncheckedCreateWithoutUserInput>
    connectOrCreate?: MentorCreateOrConnectWithoutUserInput
    connect?: MentorWhereUniqueInput
  }

  export type PlacementOfficerCreateNestedOneWithoutUserInput = {
    create?: XOR<PlacementOfficerCreateWithoutUserInput, PlacementOfficerUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlacementOfficerCreateOrConnectWithoutUserInput
    connect?: PlacementOfficerWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type MentorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<MentorCreateWithoutUserInput, MentorUncheckedCreateWithoutUserInput>
    connectOrCreate?: MentorCreateOrConnectWithoutUserInput
    connect?: MentorWhereUniqueInput
  }

  export type PlacementOfficerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PlacementOfficerCreateWithoutUserInput, PlacementOfficerUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlacementOfficerCreateOrConnectWithoutUserInput
    connect?: PlacementOfficerWhereUniqueInput
  }

  export type StudentUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MentorUpdateOneWithoutUserNestedInput = {
    create?: XOR<MentorCreateWithoutUserInput, MentorUncheckedCreateWithoutUserInput>
    connectOrCreate?: MentorCreateOrConnectWithoutUserInput
    upsert?: MentorUpsertWithoutUserInput
    disconnect?: MentorWhereInput | boolean
    delete?: MentorWhereInput | boolean
    connect?: MentorWhereUniqueInput
    update?: XOR<XOR<MentorUpdateToOneWithWhereWithoutUserInput, MentorUpdateWithoutUserInput>, MentorUncheckedUpdateWithoutUserInput>
  }

  export type PlacementOfficerUpdateOneWithoutUserNestedInput = {
    create?: XOR<PlacementOfficerCreateWithoutUserInput, PlacementOfficerUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlacementOfficerCreateOrConnectWithoutUserInput
    upsert?: PlacementOfficerUpsertWithoutUserInput
    disconnect?: PlacementOfficerWhereInput | boolean
    delete?: PlacementOfficerWhereInput | boolean
    connect?: PlacementOfficerWhereUniqueInput
    update?: XOR<XOR<PlacementOfficerUpdateToOneWithWhereWithoutUserInput, PlacementOfficerUpdateWithoutUserInput>, PlacementOfficerUncheckedUpdateWithoutUserInput>
  }

  export type StudentUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type MentorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<MentorCreateWithoutUserInput, MentorUncheckedCreateWithoutUserInput>
    connectOrCreate?: MentorCreateOrConnectWithoutUserInput
    upsert?: MentorUpsertWithoutUserInput
    disconnect?: MentorWhereInput | boolean
    delete?: MentorWhereInput | boolean
    connect?: MentorWhereUniqueInput
    update?: XOR<XOR<MentorUpdateToOneWithWhereWithoutUserInput, MentorUpdateWithoutUserInput>, MentorUncheckedUpdateWithoutUserInput>
  }

  export type PlacementOfficerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PlacementOfficerCreateWithoutUserInput, PlacementOfficerUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlacementOfficerCreateOrConnectWithoutUserInput
    upsert?: PlacementOfficerUpsertWithoutUserInput
    disconnect?: PlacementOfficerWhereInput | boolean
    delete?: PlacementOfficerWhereInput | boolean
    connect?: PlacementOfficerWhereUniqueInput
    update?: XOR<XOR<PlacementOfficerUpdateToOneWithWhereWithoutUserInput, PlacementOfficerUpdateWithoutUserInput>, PlacementOfficerUncheckedUpdateWithoutUserInput>
  }

  export type StudentUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type SavedInternshipCreateNestedManyWithoutStudentInput = {
    create?: XOR<SavedInternshipCreateWithoutStudentInput, SavedInternshipUncheckedCreateWithoutStudentInput> | SavedInternshipCreateWithoutStudentInput[] | SavedInternshipUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SavedInternshipCreateOrConnectWithoutStudentInput | SavedInternshipCreateOrConnectWithoutStudentInput[]
    createMany?: SavedInternshipCreateManyStudentInputEnvelope
    connect?: SavedInternshipWhereUniqueInput | SavedInternshipWhereUniqueInput[]
  }

  export type StudentInternshipCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentInternshipCreateWithoutStudentInput, StudentInternshipUncheckedCreateWithoutStudentInput> | StudentInternshipCreateWithoutStudentInput[] | StudentInternshipUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentInternshipCreateOrConnectWithoutStudentInput | StudentInternshipCreateOrConnectWithoutStudentInput[]
    createMany?: StudentInternshipCreateManyStudentInputEnvelope
    connect?: StudentInternshipWhereUniqueInput | StudentInternshipWhereUniqueInput[]
  }

  export type StudentSkillCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentSkillCreateWithoutStudentInput, StudentSkillUncheckedCreateWithoutStudentInput> | StudentSkillCreateWithoutStudentInput[] | StudentSkillUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentSkillCreateOrConnectWithoutStudentInput | StudentSkillCreateOrConnectWithoutStudentInput[]
    createMany?: StudentSkillCreateManyStudentInputEnvelope
    connect?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
  }

  export type MentorCreateNestedOneWithoutStudentsInput = {
    create?: XOR<MentorCreateWithoutStudentsInput, MentorUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: MentorCreateOrConnectWithoutStudentsInput
    connect?: MentorWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStudentInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    connect?: UserWhereUniqueInput
  }

  export type SavedInternshipUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<SavedInternshipCreateWithoutStudentInput, SavedInternshipUncheckedCreateWithoutStudentInput> | SavedInternshipCreateWithoutStudentInput[] | SavedInternshipUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SavedInternshipCreateOrConnectWithoutStudentInput | SavedInternshipCreateOrConnectWithoutStudentInput[]
    createMany?: SavedInternshipCreateManyStudentInputEnvelope
    connect?: SavedInternshipWhereUniqueInput | SavedInternshipWhereUniqueInput[]
  }

  export type StudentInternshipUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentInternshipCreateWithoutStudentInput, StudentInternshipUncheckedCreateWithoutStudentInput> | StudentInternshipCreateWithoutStudentInput[] | StudentInternshipUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentInternshipCreateOrConnectWithoutStudentInput | StudentInternshipCreateOrConnectWithoutStudentInput[]
    createMany?: StudentInternshipCreateManyStudentInputEnvelope
    connect?: StudentInternshipWhereUniqueInput | StudentInternshipWhereUniqueInput[]
  }

  export type StudentSkillUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentSkillCreateWithoutStudentInput, StudentSkillUncheckedCreateWithoutStudentInput> | StudentSkillCreateWithoutStudentInput[] | StudentSkillUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentSkillCreateOrConnectWithoutStudentInput | StudentSkillCreateOrConnectWithoutStudentInput[]
    createMany?: StudentSkillCreateManyStudentInputEnvelope
    connect?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type SavedInternshipUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SavedInternshipCreateWithoutStudentInput, SavedInternshipUncheckedCreateWithoutStudentInput> | SavedInternshipCreateWithoutStudentInput[] | SavedInternshipUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SavedInternshipCreateOrConnectWithoutStudentInput | SavedInternshipCreateOrConnectWithoutStudentInput[]
    upsert?: SavedInternshipUpsertWithWhereUniqueWithoutStudentInput | SavedInternshipUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SavedInternshipCreateManyStudentInputEnvelope
    set?: SavedInternshipWhereUniqueInput | SavedInternshipWhereUniqueInput[]
    disconnect?: SavedInternshipWhereUniqueInput | SavedInternshipWhereUniqueInput[]
    delete?: SavedInternshipWhereUniqueInput | SavedInternshipWhereUniqueInput[]
    connect?: SavedInternshipWhereUniqueInput | SavedInternshipWhereUniqueInput[]
    update?: SavedInternshipUpdateWithWhereUniqueWithoutStudentInput | SavedInternshipUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SavedInternshipUpdateManyWithWhereWithoutStudentInput | SavedInternshipUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SavedInternshipScalarWhereInput | SavedInternshipScalarWhereInput[]
  }

  export type StudentInternshipUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentInternshipCreateWithoutStudentInput, StudentInternshipUncheckedCreateWithoutStudentInput> | StudentInternshipCreateWithoutStudentInput[] | StudentInternshipUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentInternshipCreateOrConnectWithoutStudentInput | StudentInternshipCreateOrConnectWithoutStudentInput[]
    upsert?: StudentInternshipUpsertWithWhereUniqueWithoutStudentInput | StudentInternshipUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentInternshipCreateManyStudentInputEnvelope
    set?: StudentInternshipWhereUniqueInput | StudentInternshipWhereUniqueInput[]
    disconnect?: StudentInternshipWhereUniqueInput | StudentInternshipWhereUniqueInput[]
    delete?: StudentInternshipWhereUniqueInput | StudentInternshipWhereUniqueInput[]
    connect?: StudentInternshipWhereUniqueInput | StudentInternshipWhereUniqueInput[]
    update?: StudentInternshipUpdateWithWhereUniqueWithoutStudentInput | StudentInternshipUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentInternshipUpdateManyWithWhereWithoutStudentInput | StudentInternshipUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentInternshipScalarWhereInput | StudentInternshipScalarWhereInput[]
  }

  export type StudentSkillUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentSkillCreateWithoutStudentInput, StudentSkillUncheckedCreateWithoutStudentInput> | StudentSkillCreateWithoutStudentInput[] | StudentSkillUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentSkillCreateOrConnectWithoutStudentInput | StudentSkillCreateOrConnectWithoutStudentInput[]
    upsert?: StudentSkillUpsertWithWhereUniqueWithoutStudentInput | StudentSkillUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentSkillCreateManyStudentInputEnvelope
    set?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
    disconnect?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
    delete?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
    connect?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
    update?: StudentSkillUpdateWithWhereUniqueWithoutStudentInput | StudentSkillUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentSkillUpdateManyWithWhereWithoutStudentInput | StudentSkillUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentSkillScalarWhereInput | StudentSkillScalarWhereInput[]
  }

  export type MentorUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<MentorCreateWithoutStudentsInput, MentorUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: MentorCreateOrConnectWithoutStudentsInput
    upsert?: MentorUpsertWithoutStudentsInput
    disconnect?: MentorWhereInput | boolean
    delete?: MentorWhereInput | boolean
    connect?: MentorWhereUniqueInput
    update?: XOR<XOR<MentorUpdateToOneWithWhereWithoutStudentsInput, MentorUpdateWithoutStudentsInput>, MentorUncheckedUpdateWithoutStudentsInput>
  }

  export type UserUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    upsert?: UserUpsertWithoutStudentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentInput, UserUpdateWithoutStudentInput>, UserUncheckedUpdateWithoutStudentInput>
  }

  export type SavedInternshipUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SavedInternshipCreateWithoutStudentInput, SavedInternshipUncheckedCreateWithoutStudentInput> | SavedInternshipCreateWithoutStudentInput[] | SavedInternshipUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SavedInternshipCreateOrConnectWithoutStudentInput | SavedInternshipCreateOrConnectWithoutStudentInput[]
    upsert?: SavedInternshipUpsertWithWhereUniqueWithoutStudentInput | SavedInternshipUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SavedInternshipCreateManyStudentInputEnvelope
    set?: SavedInternshipWhereUniqueInput | SavedInternshipWhereUniqueInput[]
    disconnect?: SavedInternshipWhereUniqueInput | SavedInternshipWhereUniqueInput[]
    delete?: SavedInternshipWhereUniqueInput | SavedInternshipWhereUniqueInput[]
    connect?: SavedInternshipWhereUniqueInput | SavedInternshipWhereUniqueInput[]
    update?: SavedInternshipUpdateWithWhereUniqueWithoutStudentInput | SavedInternshipUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SavedInternshipUpdateManyWithWhereWithoutStudentInput | SavedInternshipUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SavedInternshipScalarWhereInput | SavedInternshipScalarWhereInput[]
  }

  export type StudentInternshipUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentInternshipCreateWithoutStudentInput, StudentInternshipUncheckedCreateWithoutStudentInput> | StudentInternshipCreateWithoutStudentInput[] | StudentInternshipUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentInternshipCreateOrConnectWithoutStudentInput | StudentInternshipCreateOrConnectWithoutStudentInput[]
    upsert?: StudentInternshipUpsertWithWhereUniqueWithoutStudentInput | StudentInternshipUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentInternshipCreateManyStudentInputEnvelope
    set?: StudentInternshipWhereUniqueInput | StudentInternshipWhereUniqueInput[]
    disconnect?: StudentInternshipWhereUniqueInput | StudentInternshipWhereUniqueInput[]
    delete?: StudentInternshipWhereUniqueInput | StudentInternshipWhereUniqueInput[]
    connect?: StudentInternshipWhereUniqueInput | StudentInternshipWhereUniqueInput[]
    update?: StudentInternshipUpdateWithWhereUniqueWithoutStudentInput | StudentInternshipUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentInternshipUpdateManyWithWhereWithoutStudentInput | StudentInternshipUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentInternshipScalarWhereInput | StudentInternshipScalarWhereInput[]
  }

  export type StudentSkillUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentSkillCreateWithoutStudentInput, StudentSkillUncheckedCreateWithoutStudentInput> | StudentSkillCreateWithoutStudentInput[] | StudentSkillUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentSkillCreateOrConnectWithoutStudentInput | StudentSkillCreateOrConnectWithoutStudentInput[]
    upsert?: StudentSkillUpsertWithWhereUniqueWithoutStudentInput | StudentSkillUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentSkillCreateManyStudentInputEnvelope
    set?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
    disconnect?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
    delete?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
    connect?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
    update?: StudentSkillUpdateWithWhereUniqueWithoutStudentInput | StudentSkillUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentSkillUpdateManyWithWhereWithoutStudentInput | StudentSkillUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentSkillScalarWhereInput | StudentSkillScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMentorInput = {
    create?: XOR<UserCreateWithoutMentorInput, UserUncheckedCreateWithoutMentorInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentorInput
    connect?: UserWhereUniqueInput
  }

  export type StudentCreateNestedManyWithoutMentorInput = {
    create?: XOR<StudentCreateWithoutMentorInput, StudentUncheckedCreateWithoutMentorInput> | StudentCreateWithoutMentorInput[] | StudentUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutMentorInput | StudentCreateOrConnectWithoutMentorInput[]
    createMany?: StudentCreateManyMentorInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutMentorInput = {
    create?: XOR<StudentCreateWithoutMentorInput, StudentUncheckedCreateWithoutMentorInput> | StudentCreateWithoutMentorInput[] | StudentUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutMentorInput | StudentCreateOrConnectWithoutMentorInput[]
    createMany?: StudentCreateManyMentorInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutMentorNestedInput = {
    create?: XOR<UserCreateWithoutMentorInput, UserUncheckedCreateWithoutMentorInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentorInput
    upsert?: UserUpsertWithoutMentorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMentorInput, UserUpdateWithoutMentorInput>, UserUncheckedUpdateWithoutMentorInput>
  }

  export type StudentUpdateManyWithoutMentorNestedInput = {
    create?: XOR<StudentCreateWithoutMentorInput, StudentUncheckedCreateWithoutMentorInput> | StudentCreateWithoutMentorInput[] | StudentUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutMentorInput | StudentCreateOrConnectWithoutMentorInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutMentorInput | StudentUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: StudentCreateManyMentorInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutMentorInput | StudentUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutMentorInput | StudentUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutMentorNestedInput = {
    create?: XOR<StudentCreateWithoutMentorInput, StudentUncheckedCreateWithoutMentorInput> | StudentCreateWithoutMentorInput[] | StudentUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutMentorInput | StudentCreateOrConnectWithoutMentorInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutMentorInput | StudentUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: StudentCreateManyMentorInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutMentorInput | StudentUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutMentorInput | StudentUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type InternshipCreateNestedManyWithoutPostedByInput = {
    create?: XOR<InternshipCreateWithoutPostedByInput, InternshipUncheckedCreateWithoutPostedByInput> | InternshipCreateWithoutPostedByInput[] | InternshipUncheckedCreateWithoutPostedByInput[]
    connectOrCreate?: InternshipCreateOrConnectWithoutPostedByInput | InternshipCreateOrConnectWithoutPostedByInput[]
    createMany?: InternshipCreateManyPostedByInputEnvelope
    connect?: InternshipWhereUniqueInput | InternshipWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPlacementOfficerInput = {
    create?: XOR<UserCreateWithoutPlacementOfficerInput, UserUncheckedCreateWithoutPlacementOfficerInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlacementOfficerInput
    connect?: UserWhereUniqueInput
  }

  export type InternshipUncheckedCreateNestedManyWithoutPostedByInput = {
    create?: XOR<InternshipCreateWithoutPostedByInput, InternshipUncheckedCreateWithoutPostedByInput> | InternshipCreateWithoutPostedByInput[] | InternshipUncheckedCreateWithoutPostedByInput[]
    connectOrCreate?: InternshipCreateOrConnectWithoutPostedByInput | InternshipCreateOrConnectWithoutPostedByInput[]
    createMany?: InternshipCreateManyPostedByInputEnvelope
    connect?: InternshipWhereUniqueInput | InternshipWhereUniqueInput[]
  }

  export type InternshipUpdateManyWithoutPostedByNestedInput = {
    create?: XOR<InternshipCreateWithoutPostedByInput, InternshipUncheckedCreateWithoutPostedByInput> | InternshipCreateWithoutPostedByInput[] | InternshipUncheckedCreateWithoutPostedByInput[]
    connectOrCreate?: InternshipCreateOrConnectWithoutPostedByInput | InternshipCreateOrConnectWithoutPostedByInput[]
    upsert?: InternshipUpsertWithWhereUniqueWithoutPostedByInput | InternshipUpsertWithWhereUniqueWithoutPostedByInput[]
    createMany?: InternshipCreateManyPostedByInputEnvelope
    set?: InternshipWhereUniqueInput | InternshipWhereUniqueInput[]
    disconnect?: InternshipWhereUniqueInput | InternshipWhereUniqueInput[]
    delete?: InternshipWhereUniqueInput | InternshipWhereUniqueInput[]
    connect?: InternshipWhereUniqueInput | InternshipWhereUniqueInput[]
    update?: InternshipUpdateWithWhereUniqueWithoutPostedByInput | InternshipUpdateWithWhereUniqueWithoutPostedByInput[]
    updateMany?: InternshipUpdateManyWithWhereWithoutPostedByInput | InternshipUpdateManyWithWhereWithoutPostedByInput[]
    deleteMany?: InternshipScalarWhereInput | InternshipScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPlacementOfficerNestedInput = {
    create?: XOR<UserCreateWithoutPlacementOfficerInput, UserUncheckedCreateWithoutPlacementOfficerInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlacementOfficerInput
    upsert?: UserUpsertWithoutPlacementOfficerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlacementOfficerInput, UserUpdateWithoutPlacementOfficerInput>, UserUncheckedUpdateWithoutPlacementOfficerInput>
  }

  export type InternshipUncheckedUpdateManyWithoutPostedByNestedInput = {
    create?: XOR<InternshipCreateWithoutPostedByInput, InternshipUncheckedCreateWithoutPostedByInput> | InternshipCreateWithoutPostedByInput[] | InternshipUncheckedCreateWithoutPostedByInput[]
    connectOrCreate?: InternshipCreateOrConnectWithoutPostedByInput | InternshipCreateOrConnectWithoutPostedByInput[]
    upsert?: InternshipUpsertWithWhereUniqueWithoutPostedByInput | InternshipUpsertWithWhereUniqueWithoutPostedByInput[]
    createMany?: InternshipCreateManyPostedByInputEnvelope
    set?: InternshipWhereUniqueInput | InternshipWhereUniqueInput[]
    disconnect?: InternshipWhereUniqueInput | InternshipWhereUniqueInput[]
    delete?: InternshipWhereUniqueInput | InternshipWhereUniqueInput[]
    connect?: InternshipWhereUniqueInput | InternshipWhereUniqueInput[]
    update?: InternshipUpdateWithWhereUniqueWithoutPostedByInput | InternshipUpdateWithWhereUniqueWithoutPostedByInput[]
    updateMany?: InternshipUpdateManyWithWhereWithoutPostedByInput | InternshipUpdateManyWithWhereWithoutPostedByInput[]
    deleteMany?: InternshipScalarWhereInput | InternshipScalarWhereInput[]
  }

  export type InternshipSkillCreateNestedManyWithoutInternshipInput = {
    create?: XOR<InternshipSkillCreateWithoutInternshipInput, InternshipSkillUncheckedCreateWithoutInternshipInput> | InternshipSkillCreateWithoutInternshipInput[] | InternshipSkillUncheckedCreateWithoutInternshipInput[]
    connectOrCreate?: InternshipSkillCreateOrConnectWithoutInternshipInput | InternshipSkillCreateOrConnectWithoutInternshipInput[]
    createMany?: InternshipSkillCreateManyInternshipInputEnvelope
    connect?: InternshipSkillWhereUniqueInput | InternshipSkillWhereUniqueInput[]
  }

  export type PlacementOfficerCreateNestedOneWithoutInternshipsInput = {
    create?: XOR<PlacementOfficerCreateWithoutInternshipsInput, PlacementOfficerUncheckedCreateWithoutInternshipsInput>
    connectOrCreate?: PlacementOfficerCreateOrConnectWithoutInternshipsInput
    connect?: PlacementOfficerWhereUniqueInput
  }

  export type SavedInternshipCreateNestedManyWithoutInternshipInput = {
    create?: XOR<SavedInternshipCreateWithoutInternshipInput, SavedInternshipUncheckedCreateWithoutInternshipInput> | SavedInternshipCreateWithoutInternshipInput[] | SavedInternshipUncheckedCreateWithoutInternshipInput[]
    connectOrCreate?: SavedInternshipCreateOrConnectWithoutInternshipInput | SavedInternshipCreateOrConnectWithoutInternshipInput[]
    createMany?: SavedInternshipCreateManyInternshipInputEnvelope
    connect?: SavedInternshipWhereUniqueInput | SavedInternshipWhereUniqueInput[]
  }

  export type StudentInternshipCreateNestedManyWithoutInternshipInput = {
    create?: XOR<StudentInternshipCreateWithoutInternshipInput, StudentInternshipUncheckedCreateWithoutInternshipInput> | StudentInternshipCreateWithoutInternshipInput[] | StudentInternshipUncheckedCreateWithoutInternshipInput[]
    connectOrCreate?: StudentInternshipCreateOrConnectWithoutInternshipInput | StudentInternshipCreateOrConnectWithoutInternshipInput[]
    createMany?: StudentInternshipCreateManyInternshipInputEnvelope
    connect?: StudentInternshipWhereUniqueInput | StudentInternshipWhereUniqueInput[]
  }

  export type InternshipSkillUncheckedCreateNestedManyWithoutInternshipInput = {
    create?: XOR<InternshipSkillCreateWithoutInternshipInput, InternshipSkillUncheckedCreateWithoutInternshipInput> | InternshipSkillCreateWithoutInternshipInput[] | InternshipSkillUncheckedCreateWithoutInternshipInput[]
    connectOrCreate?: InternshipSkillCreateOrConnectWithoutInternshipInput | InternshipSkillCreateOrConnectWithoutInternshipInput[]
    createMany?: InternshipSkillCreateManyInternshipInputEnvelope
    connect?: InternshipSkillWhereUniqueInput | InternshipSkillWhereUniqueInput[]
  }

  export type SavedInternshipUncheckedCreateNestedManyWithoutInternshipInput = {
    create?: XOR<SavedInternshipCreateWithoutInternshipInput, SavedInternshipUncheckedCreateWithoutInternshipInput> | SavedInternshipCreateWithoutInternshipInput[] | SavedInternshipUncheckedCreateWithoutInternshipInput[]
    connectOrCreate?: SavedInternshipCreateOrConnectWithoutInternshipInput | SavedInternshipCreateOrConnectWithoutInternshipInput[]
    createMany?: SavedInternshipCreateManyInternshipInputEnvelope
    connect?: SavedInternshipWhereUniqueInput | SavedInternshipWhereUniqueInput[]
  }

  export type StudentInternshipUncheckedCreateNestedManyWithoutInternshipInput = {
    create?: XOR<StudentInternshipCreateWithoutInternshipInput, StudentInternshipUncheckedCreateWithoutInternshipInput> | StudentInternshipCreateWithoutInternshipInput[] | StudentInternshipUncheckedCreateWithoutInternshipInput[]
    connectOrCreate?: StudentInternshipCreateOrConnectWithoutInternshipInput | StudentInternshipCreateOrConnectWithoutInternshipInput[]
    createMany?: StudentInternshipCreateManyInternshipInputEnvelope
    connect?: StudentInternshipWhereUniqueInput | StudentInternshipWhereUniqueInput[]
  }

  export type EnumModeFieldUpdateOperationsInput = {
    set?: $Enums.Mode
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumInternshipStatusFieldUpdateOperationsInput = {
    set?: $Enums.InternshipStatus
  }

  export type InternshipSkillUpdateManyWithoutInternshipNestedInput = {
    create?: XOR<InternshipSkillCreateWithoutInternshipInput, InternshipSkillUncheckedCreateWithoutInternshipInput> | InternshipSkillCreateWithoutInternshipInput[] | InternshipSkillUncheckedCreateWithoutInternshipInput[]
    connectOrCreate?: InternshipSkillCreateOrConnectWithoutInternshipInput | InternshipSkillCreateOrConnectWithoutInternshipInput[]
    upsert?: InternshipSkillUpsertWithWhereUniqueWithoutInternshipInput | InternshipSkillUpsertWithWhereUniqueWithoutInternshipInput[]
    createMany?: InternshipSkillCreateManyInternshipInputEnvelope
    set?: InternshipSkillWhereUniqueInput | InternshipSkillWhereUniqueInput[]
    disconnect?: InternshipSkillWhereUniqueInput | InternshipSkillWhereUniqueInput[]
    delete?: InternshipSkillWhereUniqueInput | InternshipSkillWhereUniqueInput[]
    connect?: InternshipSkillWhereUniqueInput | InternshipSkillWhereUniqueInput[]
    update?: InternshipSkillUpdateWithWhereUniqueWithoutInternshipInput | InternshipSkillUpdateWithWhereUniqueWithoutInternshipInput[]
    updateMany?: InternshipSkillUpdateManyWithWhereWithoutInternshipInput | InternshipSkillUpdateManyWithWhereWithoutInternshipInput[]
    deleteMany?: InternshipSkillScalarWhereInput | InternshipSkillScalarWhereInput[]
  }

  export type PlacementOfficerUpdateOneRequiredWithoutInternshipsNestedInput = {
    create?: XOR<PlacementOfficerCreateWithoutInternshipsInput, PlacementOfficerUncheckedCreateWithoutInternshipsInput>
    connectOrCreate?: PlacementOfficerCreateOrConnectWithoutInternshipsInput
    upsert?: PlacementOfficerUpsertWithoutInternshipsInput
    connect?: PlacementOfficerWhereUniqueInput
    update?: XOR<XOR<PlacementOfficerUpdateToOneWithWhereWithoutInternshipsInput, PlacementOfficerUpdateWithoutInternshipsInput>, PlacementOfficerUncheckedUpdateWithoutInternshipsInput>
  }

  export type SavedInternshipUpdateManyWithoutInternshipNestedInput = {
    create?: XOR<SavedInternshipCreateWithoutInternshipInput, SavedInternshipUncheckedCreateWithoutInternshipInput> | SavedInternshipCreateWithoutInternshipInput[] | SavedInternshipUncheckedCreateWithoutInternshipInput[]
    connectOrCreate?: SavedInternshipCreateOrConnectWithoutInternshipInput | SavedInternshipCreateOrConnectWithoutInternshipInput[]
    upsert?: SavedInternshipUpsertWithWhereUniqueWithoutInternshipInput | SavedInternshipUpsertWithWhereUniqueWithoutInternshipInput[]
    createMany?: SavedInternshipCreateManyInternshipInputEnvelope
    set?: SavedInternshipWhereUniqueInput | SavedInternshipWhereUniqueInput[]
    disconnect?: SavedInternshipWhereUniqueInput | SavedInternshipWhereUniqueInput[]
    delete?: SavedInternshipWhereUniqueInput | SavedInternshipWhereUniqueInput[]
    connect?: SavedInternshipWhereUniqueInput | SavedInternshipWhereUniqueInput[]
    update?: SavedInternshipUpdateWithWhereUniqueWithoutInternshipInput | SavedInternshipUpdateWithWhereUniqueWithoutInternshipInput[]
    updateMany?: SavedInternshipUpdateManyWithWhereWithoutInternshipInput | SavedInternshipUpdateManyWithWhereWithoutInternshipInput[]
    deleteMany?: SavedInternshipScalarWhereInput | SavedInternshipScalarWhereInput[]
  }

  export type StudentInternshipUpdateManyWithoutInternshipNestedInput = {
    create?: XOR<StudentInternshipCreateWithoutInternshipInput, StudentInternshipUncheckedCreateWithoutInternshipInput> | StudentInternshipCreateWithoutInternshipInput[] | StudentInternshipUncheckedCreateWithoutInternshipInput[]
    connectOrCreate?: StudentInternshipCreateOrConnectWithoutInternshipInput | StudentInternshipCreateOrConnectWithoutInternshipInput[]
    upsert?: StudentInternshipUpsertWithWhereUniqueWithoutInternshipInput | StudentInternshipUpsertWithWhereUniqueWithoutInternshipInput[]
    createMany?: StudentInternshipCreateManyInternshipInputEnvelope
    set?: StudentInternshipWhereUniqueInput | StudentInternshipWhereUniqueInput[]
    disconnect?: StudentInternshipWhereUniqueInput | StudentInternshipWhereUniqueInput[]
    delete?: StudentInternshipWhereUniqueInput | StudentInternshipWhereUniqueInput[]
    connect?: StudentInternshipWhereUniqueInput | StudentInternshipWhereUniqueInput[]
    update?: StudentInternshipUpdateWithWhereUniqueWithoutInternshipInput | StudentInternshipUpdateWithWhereUniqueWithoutInternshipInput[]
    updateMany?: StudentInternshipUpdateManyWithWhereWithoutInternshipInput | StudentInternshipUpdateManyWithWhereWithoutInternshipInput[]
    deleteMany?: StudentInternshipScalarWhereInput | StudentInternshipScalarWhereInput[]
  }

  export type InternshipSkillUncheckedUpdateManyWithoutInternshipNestedInput = {
    create?: XOR<InternshipSkillCreateWithoutInternshipInput, InternshipSkillUncheckedCreateWithoutInternshipInput> | InternshipSkillCreateWithoutInternshipInput[] | InternshipSkillUncheckedCreateWithoutInternshipInput[]
    connectOrCreate?: InternshipSkillCreateOrConnectWithoutInternshipInput | InternshipSkillCreateOrConnectWithoutInternshipInput[]
    upsert?: InternshipSkillUpsertWithWhereUniqueWithoutInternshipInput | InternshipSkillUpsertWithWhereUniqueWithoutInternshipInput[]
    createMany?: InternshipSkillCreateManyInternshipInputEnvelope
    set?: InternshipSkillWhereUniqueInput | InternshipSkillWhereUniqueInput[]
    disconnect?: InternshipSkillWhereUniqueInput | InternshipSkillWhereUniqueInput[]
    delete?: InternshipSkillWhereUniqueInput | InternshipSkillWhereUniqueInput[]
    connect?: InternshipSkillWhereUniqueInput | InternshipSkillWhereUniqueInput[]
    update?: InternshipSkillUpdateWithWhereUniqueWithoutInternshipInput | InternshipSkillUpdateWithWhereUniqueWithoutInternshipInput[]
    updateMany?: InternshipSkillUpdateManyWithWhereWithoutInternshipInput | InternshipSkillUpdateManyWithWhereWithoutInternshipInput[]
    deleteMany?: InternshipSkillScalarWhereInput | InternshipSkillScalarWhereInput[]
  }

  export type SavedInternshipUncheckedUpdateManyWithoutInternshipNestedInput = {
    create?: XOR<SavedInternshipCreateWithoutInternshipInput, SavedInternshipUncheckedCreateWithoutInternshipInput> | SavedInternshipCreateWithoutInternshipInput[] | SavedInternshipUncheckedCreateWithoutInternshipInput[]
    connectOrCreate?: SavedInternshipCreateOrConnectWithoutInternshipInput | SavedInternshipCreateOrConnectWithoutInternshipInput[]
    upsert?: SavedInternshipUpsertWithWhereUniqueWithoutInternshipInput | SavedInternshipUpsertWithWhereUniqueWithoutInternshipInput[]
    createMany?: SavedInternshipCreateManyInternshipInputEnvelope
    set?: SavedInternshipWhereUniqueInput | SavedInternshipWhereUniqueInput[]
    disconnect?: SavedInternshipWhereUniqueInput | SavedInternshipWhereUniqueInput[]
    delete?: SavedInternshipWhereUniqueInput | SavedInternshipWhereUniqueInput[]
    connect?: SavedInternshipWhereUniqueInput | SavedInternshipWhereUniqueInput[]
    update?: SavedInternshipUpdateWithWhereUniqueWithoutInternshipInput | SavedInternshipUpdateWithWhereUniqueWithoutInternshipInput[]
    updateMany?: SavedInternshipUpdateManyWithWhereWithoutInternshipInput | SavedInternshipUpdateManyWithWhereWithoutInternshipInput[]
    deleteMany?: SavedInternshipScalarWhereInput | SavedInternshipScalarWhereInput[]
  }

  export type StudentInternshipUncheckedUpdateManyWithoutInternshipNestedInput = {
    create?: XOR<StudentInternshipCreateWithoutInternshipInput, StudentInternshipUncheckedCreateWithoutInternshipInput> | StudentInternshipCreateWithoutInternshipInput[] | StudentInternshipUncheckedCreateWithoutInternshipInput[]
    connectOrCreate?: StudentInternshipCreateOrConnectWithoutInternshipInput | StudentInternshipCreateOrConnectWithoutInternshipInput[]
    upsert?: StudentInternshipUpsertWithWhereUniqueWithoutInternshipInput | StudentInternshipUpsertWithWhereUniqueWithoutInternshipInput[]
    createMany?: StudentInternshipCreateManyInternshipInputEnvelope
    set?: StudentInternshipWhereUniqueInput | StudentInternshipWhereUniqueInput[]
    disconnect?: StudentInternshipWhereUniqueInput | StudentInternshipWhereUniqueInput[]
    delete?: StudentInternshipWhereUniqueInput | StudentInternshipWhereUniqueInput[]
    connect?: StudentInternshipWhereUniqueInput | StudentInternshipWhereUniqueInput[]
    update?: StudentInternshipUpdateWithWhereUniqueWithoutInternshipInput | StudentInternshipUpdateWithWhereUniqueWithoutInternshipInput[]
    updateMany?: StudentInternshipUpdateManyWithWhereWithoutInternshipInput | StudentInternshipUpdateManyWithWhereWithoutInternshipInput[]
    deleteMany?: StudentInternshipScalarWhereInput | StudentInternshipScalarWhereInput[]
  }

  export type InternshipCreateNestedOneWithoutApplicantsInput = {
    create?: XOR<InternshipCreateWithoutApplicantsInput, InternshipUncheckedCreateWithoutApplicantsInput>
    connectOrCreate?: InternshipCreateOrConnectWithoutApplicantsInput
    connect?: InternshipWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutInternshipsInput = {
    create?: XOR<StudentCreateWithoutInternshipsInput, StudentUncheckedCreateWithoutInternshipsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutInternshipsInput
    connect?: StudentWhereUniqueInput
  }

  export type EnumStudentInternshipStatusFieldUpdateOperationsInput = {
    set?: $Enums.StudentInternshipStatus
  }

  export type InternshipUpdateOneRequiredWithoutApplicantsNestedInput = {
    create?: XOR<InternshipCreateWithoutApplicantsInput, InternshipUncheckedCreateWithoutApplicantsInput>
    connectOrCreate?: InternshipCreateOrConnectWithoutApplicantsInput
    upsert?: InternshipUpsertWithoutApplicantsInput
    connect?: InternshipWhereUniqueInput
    update?: XOR<XOR<InternshipUpdateToOneWithWhereWithoutApplicantsInput, InternshipUpdateWithoutApplicantsInput>, InternshipUncheckedUpdateWithoutApplicantsInput>
  }

  export type StudentUpdateOneRequiredWithoutInternshipsNestedInput = {
    create?: XOR<StudentCreateWithoutInternshipsInput, StudentUncheckedCreateWithoutInternshipsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutInternshipsInput
    upsert?: StudentUpsertWithoutInternshipsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutInternshipsInput, StudentUpdateWithoutInternshipsInput>, StudentUncheckedUpdateWithoutInternshipsInput>
  }

  export type InternshipCreateNestedOneWithoutSavedByInput = {
    create?: XOR<InternshipCreateWithoutSavedByInput, InternshipUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: InternshipCreateOrConnectWithoutSavedByInput
    connect?: InternshipWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutSavedInternshipsInput = {
    create?: XOR<StudentCreateWithoutSavedInternshipsInput, StudentUncheckedCreateWithoutSavedInternshipsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSavedInternshipsInput
    connect?: StudentWhereUniqueInput
  }

  export type InternshipUpdateOneRequiredWithoutSavedByNestedInput = {
    create?: XOR<InternshipCreateWithoutSavedByInput, InternshipUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: InternshipCreateOrConnectWithoutSavedByInput
    upsert?: InternshipUpsertWithoutSavedByInput
    connect?: InternshipWhereUniqueInput
    update?: XOR<XOR<InternshipUpdateToOneWithWhereWithoutSavedByInput, InternshipUpdateWithoutSavedByInput>, InternshipUncheckedUpdateWithoutSavedByInput>
  }

  export type StudentUpdateOneRequiredWithoutSavedInternshipsNestedInput = {
    create?: XOR<StudentCreateWithoutSavedInternshipsInput, StudentUncheckedCreateWithoutSavedInternshipsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSavedInternshipsInput
    upsert?: StudentUpsertWithoutSavedInternshipsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutSavedInternshipsInput, StudentUpdateWithoutSavedInternshipsInput>, StudentUncheckedUpdateWithoutSavedInternshipsInput>
  }

  export type InternshipSkillCreateNestedManyWithoutSkillInput = {
    create?: XOR<InternshipSkillCreateWithoutSkillInput, InternshipSkillUncheckedCreateWithoutSkillInput> | InternshipSkillCreateWithoutSkillInput[] | InternshipSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: InternshipSkillCreateOrConnectWithoutSkillInput | InternshipSkillCreateOrConnectWithoutSkillInput[]
    createMany?: InternshipSkillCreateManySkillInputEnvelope
    connect?: InternshipSkillWhereUniqueInput | InternshipSkillWhereUniqueInput[]
  }

  export type StudentSkillCreateNestedManyWithoutSkillInput = {
    create?: XOR<StudentSkillCreateWithoutSkillInput, StudentSkillUncheckedCreateWithoutSkillInput> | StudentSkillCreateWithoutSkillInput[] | StudentSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: StudentSkillCreateOrConnectWithoutSkillInput | StudentSkillCreateOrConnectWithoutSkillInput[]
    createMany?: StudentSkillCreateManySkillInputEnvelope
    connect?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
  }

  export type InternshipSkillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<InternshipSkillCreateWithoutSkillInput, InternshipSkillUncheckedCreateWithoutSkillInput> | InternshipSkillCreateWithoutSkillInput[] | InternshipSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: InternshipSkillCreateOrConnectWithoutSkillInput | InternshipSkillCreateOrConnectWithoutSkillInput[]
    createMany?: InternshipSkillCreateManySkillInputEnvelope
    connect?: InternshipSkillWhereUniqueInput | InternshipSkillWhereUniqueInput[]
  }

  export type StudentSkillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<StudentSkillCreateWithoutSkillInput, StudentSkillUncheckedCreateWithoutSkillInput> | StudentSkillCreateWithoutSkillInput[] | StudentSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: StudentSkillCreateOrConnectWithoutSkillInput | StudentSkillCreateOrConnectWithoutSkillInput[]
    createMany?: StudentSkillCreateManySkillInputEnvelope
    connect?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
  }

  export type InternshipSkillUpdateManyWithoutSkillNestedInput = {
    create?: XOR<InternshipSkillCreateWithoutSkillInput, InternshipSkillUncheckedCreateWithoutSkillInput> | InternshipSkillCreateWithoutSkillInput[] | InternshipSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: InternshipSkillCreateOrConnectWithoutSkillInput | InternshipSkillCreateOrConnectWithoutSkillInput[]
    upsert?: InternshipSkillUpsertWithWhereUniqueWithoutSkillInput | InternshipSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: InternshipSkillCreateManySkillInputEnvelope
    set?: InternshipSkillWhereUniqueInput | InternshipSkillWhereUniqueInput[]
    disconnect?: InternshipSkillWhereUniqueInput | InternshipSkillWhereUniqueInput[]
    delete?: InternshipSkillWhereUniqueInput | InternshipSkillWhereUniqueInput[]
    connect?: InternshipSkillWhereUniqueInput | InternshipSkillWhereUniqueInput[]
    update?: InternshipSkillUpdateWithWhereUniqueWithoutSkillInput | InternshipSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: InternshipSkillUpdateManyWithWhereWithoutSkillInput | InternshipSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: InternshipSkillScalarWhereInput | InternshipSkillScalarWhereInput[]
  }

  export type StudentSkillUpdateManyWithoutSkillNestedInput = {
    create?: XOR<StudentSkillCreateWithoutSkillInput, StudentSkillUncheckedCreateWithoutSkillInput> | StudentSkillCreateWithoutSkillInput[] | StudentSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: StudentSkillCreateOrConnectWithoutSkillInput | StudentSkillCreateOrConnectWithoutSkillInput[]
    upsert?: StudentSkillUpsertWithWhereUniqueWithoutSkillInput | StudentSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: StudentSkillCreateManySkillInputEnvelope
    set?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
    disconnect?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
    delete?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
    connect?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
    update?: StudentSkillUpdateWithWhereUniqueWithoutSkillInput | StudentSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: StudentSkillUpdateManyWithWhereWithoutSkillInput | StudentSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: StudentSkillScalarWhereInput | StudentSkillScalarWhereInput[]
  }

  export type InternshipSkillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<InternshipSkillCreateWithoutSkillInput, InternshipSkillUncheckedCreateWithoutSkillInput> | InternshipSkillCreateWithoutSkillInput[] | InternshipSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: InternshipSkillCreateOrConnectWithoutSkillInput | InternshipSkillCreateOrConnectWithoutSkillInput[]
    upsert?: InternshipSkillUpsertWithWhereUniqueWithoutSkillInput | InternshipSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: InternshipSkillCreateManySkillInputEnvelope
    set?: InternshipSkillWhereUniqueInput | InternshipSkillWhereUniqueInput[]
    disconnect?: InternshipSkillWhereUniqueInput | InternshipSkillWhereUniqueInput[]
    delete?: InternshipSkillWhereUniqueInput | InternshipSkillWhereUniqueInput[]
    connect?: InternshipSkillWhereUniqueInput | InternshipSkillWhereUniqueInput[]
    update?: InternshipSkillUpdateWithWhereUniqueWithoutSkillInput | InternshipSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: InternshipSkillUpdateManyWithWhereWithoutSkillInput | InternshipSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: InternshipSkillScalarWhereInput | InternshipSkillScalarWhereInput[]
  }

  export type StudentSkillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<StudentSkillCreateWithoutSkillInput, StudentSkillUncheckedCreateWithoutSkillInput> | StudentSkillCreateWithoutSkillInput[] | StudentSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: StudentSkillCreateOrConnectWithoutSkillInput | StudentSkillCreateOrConnectWithoutSkillInput[]
    upsert?: StudentSkillUpsertWithWhereUniqueWithoutSkillInput | StudentSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: StudentSkillCreateManySkillInputEnvelope
    set?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
    disconnect?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
    delete?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
    connect?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
    update?: StudentSkillUpdateWithWhereUniqueWithoutSkillInput | StudentSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: StudentSkillUpdateManyWithWhereWithoutSkillInput | StudentSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: StudentSkillScalarWhereInput | StudentSkillScalarWhereInput[]
  }

  export type SkillCreateNestedOneWithoutStudentsInput = {
    create?: XOR<SkillCreateWithoutStudentsInput, SkillUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutStudentsInput
    connect?: SkillWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutSkillsInput = {
    create?: XOR<StudentCreateWithoutSkillsInput, StudentUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSkillsInput
    connect?: StudentWhereUniqueInput
  }

  export type SkillUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<SkillCreateWithoutStudentsInput, SkillUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutStudentsInput
    upsert?: SkillUpsertWithoutStudentsInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutStudentsInput, SkillUpdateWithoutStudentsInput>, SkillUncheckedUpdateWithoutStudentsInput>
  }

  export type StudentUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<StudentCreateWithoutSkillsInput, StudentUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSkillsInput
    upsert?: StudentUpsertWithoutSkillsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutSkillsInput, StudentUpdateWithoutSkillsInput>, StudentUncheckedUpdateWithoutSkillsInput>
  }

  export type InternshipCreateNestedOneWithoutSkillsInput = {
    create?: XOR<InternshipCreateWithoutSkillsInput, InternshipUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: InternshipCreateOrConnectWithoutSkillsInput
    connect?: InternshipWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutInternshipsInput = {
    create?: XOR<SkillCreateWithoutInternshipsInput, SkillUncheckedCreateWithoutInternshipsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutInternshipsInput
    connect?: SkillWhereUniqueInput
  }

  export type InternshipUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<InternshipCreateWithoutSkillsInput, InternshipUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: InternshipCreateOrConnectWithoutSkillsInput
    upsert?: InternshipUpsertWithoutSkillsInput
    connect?: InternshipWhereUniqueInput
    update?: XOR<XOR<InternshipUpdateToOneWithWhereWithoutSkillsInput, InternshipUpdateWithoutSkillsInput>, InternshipUncheckedUpdateWithoutSkillsInput>
  }

  export type SkillUpdateOneRequiredWithoutInternshipsNestedInput = {
    create?: XOR<SkillCreateWithoutInternshipsInput, SkillUncheckedCreateWithoutInternshipsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutInternshipsInput
    upsert?: SkillUpsertWithoutInternshipsInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutInternshipsInput, SkillUpdateWithoutInternshipsInput>, SkillUncheckedUpdateWithoutInternshipsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumModeFilter<$PrismaModel = never> = {
    equals?: $Enums.Mode | EnumModeFieldRefInput<$PrismaModel>
    in?: $Enums.Mode[] | ListEnumModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Mode[] | ListEnumModeFieldRefInput<$PrismaModel>
    not?: NestedEnumModeFilter<$PrismaModel> | $Enums.Mode
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumInternshipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InternshipStatus | EnumInternshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InternshipStatus[] | ListEnumInternshipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InternshipStatus[] | ListEnumInternshipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInternshipStatusFilter<$PrismaModel> | $Enums.InternshipStatus
  }

  export type NestedEnumModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Mode | EnumModeFieldRefInput<$PrismaModel>
    in?: $Enums.Mode[] | ListEnumModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Mode[] | ListEnumModeFieldRefInput<$PrismaModel>
    not?: NestedEnumModeWithAggregatesFilter<$PrismaModel> | $Enums.Mode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModeFilter<$PrismaModel>
    _max?: NestedEnumModeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumInternshipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InternshipStatus | EnumInternshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InternshipStatus[] | ListEnumInternshipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InternshipStatus[] | ListEnumInternshipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInternshipStatusWithAggregatesFilter<$PrismaModel> | $Enums.InternshipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInternshipStatusFilter<$PrismaModel>
    _max?: NestedEnumInternshipStatusFilter<$PrismaModel>
  }

  export type NestedEnumStudentInternshipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentInternshipStatus | EnumStudentInternshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentInternshipStatus[] | ListEnumStudentInternshipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudentInternshipStatus[] | ListEnumStudentInternshipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStudentInternshipStatusFilter<$PrismaModel> | $Enums.StudentInternshipStatus
  }

  export type NestedEnumStudentInternshipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentInternshipStatus | EnumStudentInternshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentInternshipStatus[] | ListEnumStudentInternshipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudentInternshipStatus[] | ListEnumStudentInternshipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStudentInternshipStatusWithAggregatesFilter<$PrismaModel> | $Enums.StudentInternshipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStudentInternshipStatusFilter<$PrismaModel>
    _max?: NestedEnumStudentInternshipStatusFilter<$PrismaModel>
  }

  export type MentorCreateWithoutUserInput = {
    designation?: string | null
    experienceYears?: number | null
    students?: StudentCreateNestedManyWithoutMentorInput
  }

  export type MentorUncheckedCreateWithoutUserInput = {
    designation?: string | null
    experienceYears?: number | null
    students?: StudentUncheckedCreateNestedManyWithoutMentorInput
  }

  export type MentorCreateOrConnectWithoutUserInput = {
    where: MentorWhereUniqueInput
    create: XOR<MentorCreateWithoutUserInput, MentorUncheckedCreateWithoutUserInput>
  }

  export type PlacementOfficerCreateWithoutUserInput = {
    internships?: InternshipCreateNestedManyWithoutPostedByInput
  }

  export type PlacementOfficerUncheckedCreateWithoutUserInput = {
    internships?: InternshipUncheckedCreateNestedManyWithoutPostedByInput
  }

  export type PlacementOfficerCreateOrConnectWithoutUserInput = {
    where: PlacementOfficerWhereUniqueInput
    create: XOR<PlacementOfficerCreateWithoutUserInput, PlacementOfficerUncheckedCreateWithoutUserInput>
  }

  export type StudentCreateWithoutUserInput = {
    semester?: number | null
    year?: number | null
    cgpa?: Decimal | DecimalJsLike | number | string | null
    resumeUrl?: string | null
    profileCompleted?: boolean
    savedInternships?: SavedInternshipCreateNestedManyWithoutStudentInput
    internships?: StudentInternshipCreateNestedManyWithoutStudentInput
    skills?: StudentSkillCreateNestedManyWithoutStudentInput
    mentor?: MentorCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutUserInput = {
    semester?: number | null
    year?: number | null
    cgpa?: Decimal | DecimalJsLike | number | string | null
    resumeUrl?: string | null
    profileCompleted?: boolean
    mentorId?: string | null
    savedInternships?: SavedInternshipUncheckedCreateNestedManyWithoutStudentInput
    internships?: StudentInternshipUncheckedCreateNestedManyWithoutStudentInput
    skills?: StudentSkillUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutUserInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type MentorUpsertWithoutUserInput = {
    update: XOR<MentorUpdateWithoutUserInput, MentorUncheckedUpdateWithoutUserInput>
    create: XOR<MentorCreateWithoutUserInput, MentorUncheckedCreateWithoutUserInput>
    where?: MentorWhereInput
  }

  export type MentorUpdateToOneWithWhereWithoutUserInput = {
    where?: MentorWhereInput
    data: XOR<MentorUpdateWithoutUserInput, MentorUncheckedUpdateWithoutUserInput>
  }

  export type MentorUpdateWithoutUserInput = {
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    students?: StudentUpdateManyWithoutMentorNestedInput
  }

  export type MentorUncheckedUpdateWithoutUserInput = {
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    students?: StudentUncheckedUpdateManyWithoutMentorNestedInput
  }

  export type PlacementOfficerUpsertWithoutUserInput = {
    update: XOR<PlacementOfficerUpdateWithoutUserInput, PlacementOfficerUncheckedUpdateWithoutUserInput>
    create: XOR<PlacementOfficerCreateWithoutUserInput, PlacementOfficerUncheckedCreateWithoutUserInput>
    where?: PlacementOfficerWhereInput
  }

  export type PlacementOfficerUpdateToOneWithWhereWithoutUserInput = {
    where?: PlacementOfficerWhereInput
    data: XOR<PlacementOfficerUpdateWithoutUserInput, PlacementOfficerUncheckedUpdateWithoutUserInput>
  }

  export type PlacementOfficerUpdateWithoutUserInput = {
    internships?: InternshipUpdateManyWithoutPostedByNestedInput
  }

  export type PlacementOfficerUncheckedUpdateWithoutUserInput = {
    internships?: InternshipUncheckedUpdateManyWithoutPostedByNestedInput
  }

  export type StudentUpsertWithoutUserInput = {
    update: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutUserInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
  }

  export type StudentUpdateWithoutUserInput = {
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    cgpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    savedInternships?: SavedInternshipUpdateManyWithoutStudentNestedInput
    internships?: StudentInternshipUpdateManyWithoutStudentNestedInput
    skills?: StudentSkillUpdateManyWithoutStudentNestedInput
    mentor?: MentorUpdateOneWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutUserInput = {
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    cgpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    mentorId?: NullableStringFieldUpdateOperationsInput | string | null
    savedInternships?: SavedInternshipUncheckedUpdateManyWithoutStudentNestedInput
    internships?: StudentInternshipUncheckedUpdateManyWithoutStudentNestedInput
    skills?: StudentSkillUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type SavedInternshipCreateWithoutStudentInput = {
    savedAt?: Date | string
    internship: InternshipCreateNestedOneWithoutSavedByInput
  }

  export type SavedInternshipUncheckedCreateWithoutStudentInput = {
    internshipId: string
    savedAt?: Date | string
  }

  export type SavedInternshipCreateOrConnectWithoutStudentInput = {
    where: SavedInternshipWhereUniqueInput
    create: XOR<SavedInternshipCreateWithoutStudentInput, SavedInternshipUncheckedCreateWithoutStudentInput>
  }

  export type SavedInternshipCreateManyStudentInputEnvelope = {
    data: SavedInternshipCreateManyStudentInput | SavedInternshipCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type StudentInternshipCreateWithoutStudentInput = {
    id?: string
    status?: $Enums.StudentInternshipStatus
    certificateUrl?: string | null
    appliedAt?: Date | string
    internship: InternshipCreateNestedOneWithoutApplicantsInput
  }

  export type StudentInternshipUncheckedCreateWithoutStudentInput = {
    id?: string
    internshipId: string
    status?: $Enums.StudentInternshipStatus
    certificateUrl?: string | null
    appliedAt?: Date | string
  }

  export type StudentInternshipCreateOrConnectWithoutStudentInput = {
    where: StudentInternshipWhereUniqueInput
    create: XOR<StudentInternshipCreateWithoutStudentInput, StudentInternshipUncheckedCreateWithoutStudentInput>
  }

  export type StudentInternshipCreateManyStudentInputEnvelope = {
    data: StudentInternshipCreateManyStudentInput | StudentInternshipCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type StudentSkillCreateWithoutStudentInput = {
    skill: SkillCreateNestedOneWithoutStudentsInput
  }

  export type StudentSkillUncheckedCreateWithoutStudentInput = {
    skillId: string
  }

  export type StudentSkillCreateOrConnectWithoutStudentInput = {
    where: StudentSkillWhereUniqueInput
    create: XOR<StudentSkillCreateWithoutStudentInput, StudentSkillUncheckedCreateWithoutStudentInput>
  }

  export type StudentSkillCreateManyStudentInputEnvelope = {
    data: StudentSkillCreateManyStudentInput | StudentSkillCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type MentorCreateWithoutStudentsInput = {
    designation?: string | null
    experienceYears?: number | null
    user: UserCreateNestedOneWithoutMentorInput
  }

  export type MentorUncheckedCreateWithoutStudentsInput = {
    userId: string
    designation?: string | null
    experienceYears?: number | null
  }

  export type MentorCreateOrConnectWithoutStudentsInput = {
    where: MentorWhereUniqueInput
    create: XOR<MentorCreateWithoutStudentsInput, MentorUncheckedCreateWithoutStudentsInput>
  }

  export type UserCreateWithoutStudentInput = {
    id?: string
    name: string
    email: string
    phoneNo?: string | null
    department?: string | null
    role: $Enums.Role
    profileUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    userId: string
    mentor?: MentorCreateNestedOneWithoutUserInput
    placementOfficer?: PlacementOfficerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudentInput = {
    id?: string
    name: string
    email: string
    phoneNo?: string | null
    department?: string | null
    role: $Enums.Role
    profileUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    userId: string
    mentor?: MentorUncheckedCreateNestedOneWithoutUserInput
    placementOfficer?: PlacementOfficerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
  }

  export type SavedInternshipUpsertWithWhereUniqueWithoutStudentInput = {
    where: SavedInternshipWhereUniqueInput
    update: XOR<SavedInternshipUpdateWithoutStudentInput, SavedInternshipUncheckedUpdateWithoutStudentInput>
    create: XOR<SavedInternshipCreateWithoutStudentInput, SavedInternshipUncheckedCreateWithoutStudentInput>
  }

  export type SavedInternshipUpdateWithWhereUniqueWithoutStudentInput = {
    where: SavedInternshipWhereUniqueInput
    data: XOR<SavedInternshipUpdateWithoutStudentInput, SavedInternshipUncheckedUpdateWithoutStudentInput>
  }

  export type SavedInternshipUpdateManyWithWhereWithoutStudentInput = {
    where: SavedInternshipScalarWhereInput
    data: XOR<SavedInternshipUpdateManyMutationInput, SavedInternshipUncheckedUpdateManyWithoutStudentInput>
  }

  export type SavedInternshipScalarWhereInput = {
    AND?: SavedInternshipScalarWhereInput | SavedInternshipScalarWhereInput[]
    OR?: SavedInternshipScalarWhereInput[]
    NOT?: SavedInternshipScalarWhereInput | SavedInternshipScalarWhereInput[]
    studentId?: StringFilter<"SavedInternship"> | string
    internshipId?: StringFilter<"SavedInternship"> | string
    savedAt?: DateTimeFilter<"SavedInternship"> | Date | string
  }

  export type StudentInternshipUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentInternshipWhereUniqueInput
    update: XOR<StudentInternshipUpdateWithoutStudentInput, StudentInternshipUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentInternshipCreateWithoutStudentInput, StudentInternshipUncheckedCreateWithoutStudentInput>
  }

  export type StudentInternshipUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentInternshipWhereUniqueInput
    data: XOR<StudentInternshipUpdateWithoutStudentInput, StudentInternshipUncheckedUpdateWithoutStudentInput>
  }

  export type StudentInternshipUpdateManyWithWhereWithoutStudentInput = {
    where: StudentInternshipScalarWhereInput
    data: XOR<StudentInternshipUpdateManyMutationInput, StudentInternshipUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentInternshipScalarWhereInput = {
    AND?: StudentInternshipScalarWhereInput | StudentInternshipScalarWhereInput[]
    OR?: StudentInternshipScalarWhereInput[]
    NOT?: StudentInternshipScalarWhereInput | StudentInternshipScalarWhereInput[]
    id?: StringFilter<"StudentInternship"> | string
    studentId?: StringFilter<"StudentInternship"> | string
    internshipId?: StringFilter<"StudentInternship"> | string
    status?: EnumStudentInternshipStatusFilter<"StudentInternship"> | $Enums.StudentInternshipStatus
    certificateUrl?: StringNullableFilter<"StudentInternship"> | string | null
    appliedAt?: DateTimeFilter<"StudentInternship"> | Date | string
  }

  export type StudentSkillUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentSkillWhereUniqueInput
    update: XOR<StudentSkillUpdateWithoutStudentInput, StudentSkillUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentSkillCreateWithoutStudentInput, StudentSkillUncheckedCreateWithoutStudentInput>
  }

  export type StudentSkillUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentSkillWhereUniqueInput
    data: XOR<StudentSkillUpdateWithoutStudentInput, StudentSkillUncheckedUpdateWithoutStudentInput>
  }

  export type StudentSkillUpdateManyWithWhereWithoutStudentInput = {
    where: StudentSkillScalarWhereInput
    data: XOR<StudentSkillUpdateManyMutationInput, StudentSkillUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentSkillScalarWhereInput = {
    AND?: StudentSkillScalarWhereInput | StudentSkillScalarWhereInput[]
    OR?: StudentSkillScalarWhereInput[]
    NOT?: StudentSkillScalarWhereInput | StudentSkillScalarWhereInput[]
    studentId?: StringFilter<"StudentSkill"> | string
    skillId?: StringFilter<"StudentSkill"> | string
  }

  export type MentorUpsertWithoutStudentsInput = {
    update: XOR<MentorUpdateWithoutStudentsInput, MentorUncheckedUpdateWithoutStudentsInput>
    create: XOR<MentorCreateWithoutStudentsInput, MentorUncheckedCreateWithoutStudentsInput>
    where?: MentorWhereInput
  }

  export type MentorUpdateToOneWithWhereWithoutStudentsInput = {
    where?: MentorWhereInput
    data: XOR<MentorUpdateWithoutStudentsInput, MentorUncheckedUpdateWithoutStudentsInput>
  }

  export type MentorUpdateWithoutStudentsInput = {
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutMentorNestedInput
  }

  export type MentorUncheckedUpdateWithoutStudentsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUpsertWithoutStudentInput = {
    update: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
  }

  export type UserUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    mentor?: MentorUpdateOneWithoutUserNestedInput
    placementOfficer?: PlacementOfficerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    mentor?: MentorUncheckedUpdateOneWithoutUserNestedInput
    placementOfficer?: PlacementOfficerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutMentorInput = {
    id?: string
    name: string
    email: string
    phoneNo?: string | null
    department?: string | null
    role: $Enums.Role
    profileUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    userId: string
    placementOfficer?: PlacementOfficerCreateNestedOneWithoutUserInput
    student?: StudentCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMentorInput = {
    id?: string
    name: string
    email: string
    phoneNo?: string | null
    department?: string | null
    role: $Enums.Role
    profileUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    userId: string
    placementOfficer?: PlacementOfficerUncheckedCreateNestedOneWithoutUserInput
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMentorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMentorInput, UserUncheckedCreateWithoutMentorInput>
  }

  export type StudentCreateWithoutMentorInput = {
    semester?: number | null
    year?: number | null
    cgpa?: Decimal | DecimalJsLike | number | string | null
    resumeUrl?: string | null
    profileCompleted?: boolean
    savedInternships?: SavedInternshipCreateNestedManyWithoutStudentInput
    internships?: StudentInternshipCreateNestedManyWithoutStudentInput
    skills?: StudentSkillCreateNestedManyWithoutStudentInput
    user: UserCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutMentorInput = {
    userId: string
    semester?: number | null
    year?: number | null
    cgpa?: Decimal | DecimalJsLike | number | string | null
    resumeUrl?: string | null
    profileCompleted?: boolean
    savedInternships?: SavedInternshipUncheckedCreateNestedManyWithoutStudentInput
    internships?: StudentInternshipUncheckedCreateNestedManyWithoutStudentInput
    skills?: StudentSkillUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutMentorInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutMentorInput, StudentUncheckedCreateWithoutMentorInput>
  }

  export type StudentCreateManyMentorInputEnvelope = {
    data: StudentCreateManyMentorInput | StudentCreateManyMentorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMentorInput = {
    update: XOR<UserUpdateWithoutMentorInput, UserUncheckedUpdateWithoutMentorInput>
    create: XOR<UserCreateWithoutMentorInput, UserUncheckedCreateWithoutMentorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMentorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMentorInput, UserUncheckedUpdateWithoutMentorInput>
  }

  export type UserUpdateWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    placementOfficer?: PlacementOfficerUpdateOneWithoutUserNestedInput
    student?: StudentUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    placementOfficer?: PlacementOfficerUncheckedUpdateOneWithoutUserNestedInput
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
  }

  export type StudentUpsertWithWhereUniqueWithoutMentorInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutMentorInput, StudentUncheckedUpdateWithoutMentorInput>
    create: XOR<StudentCreateWithoutMentorInput, StudentUncheckedCreateWithoutMentorInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutMentorInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutMentorInput, StudentUncheckedUpdateWithoutMentorInput>
  }

  export type StudentUpdateManyWithWhereWithoutMentorInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutMentorInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    userId?: StringFilter<"Student"> | string
    semester?: IntNullableFilter<"Student"> | number | null
    year?: IntNullableFilter<"Student"> | number | null
    cgpa?: DecimalNullableFilter<"Student"> | Decimal | DecimalJsLike | number | string | null
    resumeUrl?: StringNullableFilter<"Student"> | string | null
    profileCompleted?: BoolFilter<"Student"> | boolean
    mentorId?: StringNullableFilter<"Student"> | string | null
  }

  export type InternshipCreateWithoutPostedByInput = {
    id?: string
    title: string
    companyName?: string | null
    companyUrl?: string | null
    companyLogo?: string | null
    description?: string | null
    location?: string | null
    mode: $Enums.Mode
    duration: string
    applicationDeadline?: Date | string | null
    requirement: string
    salaryPackage?: string | null
    minCgpa?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.InternshipStatus
    createdAt?: Date | string
    skills?: InternshipSkillCreateNestedManyWithoutInternshipInput
    savedBy?: SavedInternshipCreateNestedManyWithoutInternshipInput
    applicants?: StudentInternshipCreateNestedManyWithoutInternshipInput
  }

  export type InternshipUncheckedCreateWithoutPostedByInput = {
    id?: string
    title: string
    companyName?: string | null
    companyUrl?: string | null
    companyLogo?: string | null
    description?: string | null
    location?: string | null
    mode: $Enums.Mode
    duration: string
    applicationDeadline?: Date | string | null
    requirement: string
    salaryPackage?: string | null
    minCgpa?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.InternshipStatus
    createdAt?: Date | string
    skills?: InternshipSkillUncheckedCreateNestedManyWithoutInternshipInput
    savedBy?: SavedInternshipUncheckedCreateNestedManyWithoutInternshipInput
    applicants?: StudentInternshipUncheckedCreateNestedManyWithoutInternshipInput
  }

  export type InternshipCreateOrConnectWithoutPostedByInput = {
    where: InternshipWhereUniqueInput
    create: XOR<InternshipCreateWithoutPostedByInput, InternshipUncheckedCreateWithoutPostedByInput>
  }

  export type InternshipCreateManyPostedByInputEnvelope = {
    data: InternshipCreateManyPostedByInput | InternshipCreateManyPostedByInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPlacementOfficerInput = {
    id?: string
    name: string
    email: string
    phoneNo?: string | null
    department?: string | null
    role: $Enums.Role
    profileUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    userId: string
    mentor?: MentorCreateNestedOneWithoutUserInput
    student?: StudentCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlacementOfficerInput = {
    id?: string
    name: string
    email: string
    phoneNo?: string | null
    department?: string | null
    role: $Enums.Role
    profileUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    userId: string
    mentor?: MentorUncheckedCreateNestedOneWithoutUserInput
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlacementOfficerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlacementOfficerInput, UserUncheckedCreateWithoutPlacementOfficerInput>
  }

  export type InternshipUpsertWithWhereUniqueWithoutPostedByInput = {
    where: InternshipWhereUniqueInput
    update: XOR<InternshipUpdateWithoutPostedByInput, InternshipUncheckedUpdateWithoutPostedByInput>
    create: XOR<InternshipCreateWithoutPostedByInput, InternshipUncheckedCreateWithoutPostedByInput>
  }

  export type InternshipUpdateWithWhereUniqueWithoutPostedByInput = {
    where: InternshipWhereUniqueInput
    data: XOR<InternshipUpdateWithoutPostedByInput, InternshipUncheckedUpdateWithoutPostedByInput>
  }

  export type InternshipUpdateManyWithWhereWithoutPostedByInput = {
    where: InternshipScalarWhereInput
    data: XOR<InternshipUpdateManyMutationInput, InternshipUncheckedUpdateManyWithoutPostedByInput>
  }

  export type InternshipScalarWhereInput = {
    AND?: InternshipScalarWhereInput | InternshipScalarWhereInput[]
    OR?: InternshipScalarWhereInput[]
    NOT?: InternshipScalarWhereInput | InternshipScalarWhereInput[]
    id?: StringFilter<"Internship"> | string
    title?: StringFilter<"Internship"> | string
    companyName?: StringNullableFilter<"Internship"> | string | null
    companyUrl?: StringNullableFilter<"Internship"> | string | null
    companyLogo?: StringNullableFilter<"Internship"> | string | null
    description?: StringNullableFilter<"Internship"> | string | null
    location?: StringNullableFilter<"Internship"> | string | null
    mode?: EnumModeFilter<"Internship"> | $Enums.Mode
    duration?: StringFilter<"Internship"> | string
    applicationDeadline?: DateTimeNullableFilter<"Internship"> | Date | string | null
    requirement?: StringFilter<"Internship"> | string
    salaryPackage?: StringNullableFilter<"Internship"> | string | null
    minCgpa?: DecimalNullableFilter<"Internship"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumInternshipStatusFilter<"Internship"> | $Enums.InternshipStatus
    createdAt?: DateTimeFilter<"Internship"> | Date | string
    postedById?: StringFilter<"Internship"> | string
  }

  export type UserUpsertWithoutPlacementOfficerInput = {
    update: XOR<UserUpdateWithoutPlacementOfficerInput, UserUncheckedUpdateWithoutPlacementOfficerInput>
    create: XOR<UserCreateWithoutPlacementOfficerInput, UserUncheckedCreateWithoutPlacementOfficerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlacementOfficerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlacementOfficerInput, UserUncheckedUpdateWithoutPlacementOfficerInput>
  }

  export type UserUpdateWithoutPlacementOfficerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    mentor?: MentorUpdateOneWithoutUserNestedInput
    student?: StudentUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlacementOfficerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    mentor?: MentorUncheckedUpdateOneWithoutUserNestedInput
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
  }

  export type InternshipSkillCreateWithoutInternshipInput = {
    skill: SkillCreateNestedOneWithoutInternshipsInput
  }

  export type InternshipSkillUncheckedCreateWithoutInternshipInput = {
    skillId: string
  }

  export type InternshipSkillCreateOrConnectWithoutInternshipInput = {
    where: InternshipSkillWhereUniqueInput
    create: XOR<InternshipSkillCreateWithoutInternshipInput, InternshipSkillUncheckedCreateWithoutInternshipInput>
  }

  export type InternshipSkillCreateManyInternshipInputEnvelope = {
    data: InternshipSkillCreateManyInternshipInput | InternshipSkillCreateManyInternshipInput[]
    skipDuplicates?: boolean
  }

  export type PlacementOfficerCreateWithoutInternshipsInput = {
    user: UserCreateNestedOneWithoutPlacementOfficerInput
  }

  export type PlacementOfficerUncheckedCreateWithoutInternshipsInput = {
    userId: string
  }

  export type PlacementOfficerCreateOrConnectWithoutInternshipsInput = {
    where: PlacementOfficerWhereUniqueInput
    create: XOR<PlacementOfficerCreateWithoutInternshipsInput, PlacementOfficerUncheckedCreateWithoutInternshipsInput>
  }

  export type SavedInternshipCreateWithoutInternshipInput = {
    savedAt?: Date | string
    student: StudentCreateNestedOneWithoutSavedInternshipsInput
  }

  export type SavedInternshipUncheckedCreateWithoutInternshipInput = {
    studentId: string
    savedAt?: Date | string
  }

  export type SavedInternshipCreateOrConnectWithoutInternshipInput = {
    where: SavedInternshipWhereUniqueInput
    create: XOR<SavedInternshipCreateWithoutInternshipInput, SavedInternshipUncheckedCreateWithoutInternshipInput>
  }

  export type SavedInternshipCreateManyInternshipInputEnvelope = {
    data: SavedInternshipCreateManyInternshipInput | SavedInternshipCreateManyInternshipInput[]
    skipDuplicates?: boolean
  }

  export type StudentInternshipCreateWithoutInternshipInput = {
    id?: string
    status?: $Enums.StudentInternshipStatus
    certificateUrl?: string | null
    appliedAt?: Date | string
    student: StudentCreateNestedOneWithoutInternshipsInput
  }

  export type StudentInternshipUncheckedCreateWithoutInternshipInput = {
    id?: string
    studentId: string
    status?: $Enums.StudentInternshipStatus
    certificateUrl?: string | null
    appliedAt?: Date | string
  }

  export type StudentInternshipCreateOrConnectWithoutInternshipInput = {
    where: StudentInternshipWhereUniqueInput
    create: XOR<StudentInternshipCreateWithoutInternshipInput, StudentInternshipUncheckedCreateWithoutInternshipInput>
  }

  export type StudentInternshipCreateManyInternshipInputEnvelope = {
    data: StudentInternshipCreateManyInternshipInput | StudentInternshipCreateManyInternshipInput[]
    skipDuplicates?: boolean
  }

  export type InternshipSkillUpsertWithWhereUniqueWithoutInternshipInput = {
    where: InternshipSkillWhereUniqueInput
    update: XOR<InternshipSkillUpdateWithoutInternshipInput, InternshipSkillUncheckedUpdateWithoutInternshipInput>
    create: XOR<InternshipSkillCreateWithoutInternshipInput, InternshipSkillUncheckedCreateWithoutInternshipInput>
  }

  export type InternshipSkillUpdateWithWhereUniqueWithoutInternshipInput = {
    where: InternshipSkillWhereUniqueInput
    data: XOR<InternshipSkillUpdateWithoutInternshipInput, InternshipSkillUncheckedUpdateWithoutInternshipInput>
  }

  export type InternshipSkillUpdateManyWithWhereWithoutInternshipInput = {
    where: InternshipSkillScalarWhereInput
    data: XOR<InternshipSkillUpdateManyMutationInput, InternshipSkillUncheckedUpdateManyWithoutInternshipInput>
  }

  export type InternshipSkillScalarWhereInput = {
    AND?: InternshipSkillScalarWhereInput | InternshipSkillScalarWhereInput[]
    OR?: InternshipSkillScalarWhereInput[]
    NOT?: InternshipSkillScalarWhereInput | InternshipSkillScalarWhereInput[]
    internshipId?: StringFilter<"InternshipSkill"> | string
    skillId?: StringFilter<"InternshipSkill"> | string
  }

  export type PlacementOfficerUpsertWithoutInternshipsInput = {
    update: XOR<PlacementOfficerUpdateWithoutInternshipsInput, PlacementOfficerUncheckedUpdateWithoutInternshipsInput>
    create: XOR<PlacementOfficerCreateWithoutInternshipsInput, PlacementOfficerUncheckedCreateWithoutInternshipsInput>
    where?: PlacementOfficerWhereInput
  }

  export type PlacementOfficerUpdateToOneWithWhereWithoutInternshipsInput = {
    where?: PlacementOfficerWhereInput
    data: XOR<PlacementOfficerUpdateWithoutInternshipsInput, PlacementOfficerUncheckedUpdateWithoutInternshipsInput>
  }

  export type PlacementOfficerUpdateWithoutInternshipsInput = {
    user?: UserUpdateOneRequiredWithoutPlacementOfficerNestedInput
  }

  export type PlacementOfficerUncheckedUpdateWithoutInternshipsInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SavedInternshipUpsertWithWhereUniqueWithoutInternshipInput = {
    where: SavedInternshipWhereUniqueInput
    update: XOR<SavedInternshipUpdateWithoutInternshipInput, SavedInternshipUncheckedUpdateWithoutInternshipInput>
    create: XOR<SavedInternshipCreateWithoutInternshipInput, SavedInternshipUncheckedCreateWithoutInternshipInput>
  }

  export type SavedInternshipUpdateWithWhereUniqueWithoutInternshipInput = {
    where: SavedInternshipWhereUniqueInput
    data: XOR<SavedInternshipUpdateWithoutInternshipInput, SavedInternshipUncheckedUpdateWithoutInternshipInput>
  }

  export type SavedInternshipUpdateManyWithWhereWithoutInternshipInput = {
    where: SavedInternshipScalarWhereInput
    data: XOR<SavedInternshipUpdateManyMutationInput, SavedInternshipUncheckedUpdateManyWithoutInternshipInput>
  }

  export type StudentInternshipUpsertWithWhereUniqueWithoutInternshipInput = {
    where: StudentInternshipWhereUniqueInput
    update: XOR<StudentInternshipUpdateWithoutInternshipInput, StudentInternshipUncheckedUpdateWithoutInternshipInput>
    create: XOR<StudentInternshipCreateWithoutInternshipInput, StudentInternshipUncheckedCreateWithoutInternshipInput>
  }

  export type StudentInternshipUpdateWithWhereUniqueWithoutInternshipInput = {
    where: StudentInternshipWhereUniqueInput
    data: XOR<StudentInternshipUpdateWithoutInternshipInput, StudentInternshipUncheckedUpdateWithoutInternshipInput>
  }

  export type StudentInternshipUpdateManyWithWhereWithoutInternshipInput = {
    where: StudentInternshipScalarWhereInput
    data: XOR<StudentInternshipUpdateManyMutationInput, StudentInternshipUncheckedUpdateManyWithoutInternshipInput>
  }

  export type InternshipCreateWithoutApplicantsInput = {
    id?: string
    title: string
    companyName?: string | null
    companyUrl?: string | null
    companyLogo?: string | null
    description?: string | null
    location?: string | null
    mode: $Enums.Mode
    duration: string
    applicationDeadline?: Date | string | null
    requirement: string
    salaryPackage?: string | null
    minCgpa?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.InternshipStatus
    createdAt?: Date | string
    skills?: InternshipSkillCreateNestedManyWithoutInternshipInput
    postedBy: PlacementOfficerCreateNestedOneWithoutInternshipsInput
    savedBy?: SavedInternshipCreateNestedManyWithoutInternshipInput
  }

  export type InternshipUncheckedCreateWithoutApplicantsInput = {
    id?: string
    title: string
    companyName?: string | null
    companyUrl?: string | null
    companyLogo?: string | null
    description?: string | null
    location?: string | null
    mode: $Enums.Mode
    duration: string
    applicationDeadline?: Date | string | null
    requirement: string
    salaryPackage?: string | null
    minCgpa?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.InternshipStatus
    createdAt?: Date | string
    postedById: string
    skills?: InternshipSkillUncheckedCreateNestedManyWithoutInternshipInput
    savedBy?: SavedInternshipUncheckedCreateNestedManyWithoutInternshipInput
  }

  export type InternshipCreateOrConnectWithoutApplicantsInput = {
    where: InternshipWhereUniqueInput
    create: XOR<InternshipCreateWithoutApplicantsInput, InternshipUncheckedCreateWithoutApplicantsInput>
  }

  export type StudentCreateWithoutInternshipsInput = {
    semester?: number | null
    year?: number | null
    cgpa?: Decimal | DecimalJsLike | number | string | null
    resumeUrl?: string | null
    profileCompleted?: boolean
    savedInternships?: SavedInternshipCreateNestedManyWithoutStudentInput
    skills?: StudentSkillCreateNestedManyWithoutStudentInput
    mentor?: MentorCreateNestedOneWithoutStudentsInput
    user: UserCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutInternshipsInput = {
    userId: string
    semester?: number | null
    year?: number | null
    cgpa?: Decimal | DecimalJsLike | number | string | null
    resumeUrl?: string | null
    profileCompleted?: boolean
    mentorId?: string | null
    savedInternships?: SavedInternshipUncheckedCreateNestedManyWithoutStudentInput
    skills?: StudentSkillUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutInternshipsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutInternshipsInput, StudentUncheckedCreateWithoutInternshipsInput>
  }

  export type InternshipUpsertWithoutApplicantsInput = {
    update: XOR<InternshipUpdateWithoutApplicantsInput, InternshipUncheckedUpdateWithoutApplicantsInput>
    create: XOR<InternshipCreateWithoutApplicantsInput, InternshipUncheckedCreateWithoutApplicantsInput>
    where?: InternshipWhereInput
  }

  export type InternshipUpdateToOneWithWhereWithoutApplicantsInput = {
    where?: InternshipWhereInput
    data: XOR<InternshipUpdateWithoutApplicantsInput, InternshipUncheckedUpdateWithoutApplicantsInput>
  }

  export type InternshipUpdateWithoutApplicantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    mode?: EnumModeFieldUpdateOperationsInput | $Enums.Mode
    duration?: StringFieldUpdateOperationsInput | string
    applicationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requirement?: StringFieldUpdateOperationsInput | string
    salaryPackage?: NullableStringFieldUpdateOperationsInput | string | null
    minCgpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumInternshipStatusFieldUpdateOperationsInput | $Enums.InternshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: InternshipSkillUpdateManyWithoutInternshipNestedInput
    postedBy?: PlacementOfficerUpdateOneRequiredWithoutInternshipsNestedInput
    savedBy?: SavedInternshipUpdateManyWithoutInternshipNestedInput
  }

  export type InternshipUncheckedUpdateWithoutApplicantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    mode?: EnumModeFieldUpdateOperationsInput | $Enums.Mode
    duration?: StringFieldUpdateOperationsInput | string
    applicationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requirement?: StringFieldUpdateOperationsInput | string
    salaryPackage?: NullableStringFieldUpdateOperationsInput | string | null
    minCgpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumInternshipStatusFieldUpdateOperationsInput | $Enums.InternshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedById?: StringFieldUpdateOperationsInput | string
    skills?: InternshipSkillUncheckedUpdateManyWithoutInternshipNestedInput
    savedBy?: SavedInternshipUncheckedUpdateManyWithoutInternshipNestedInput
  }

  export type StudentUpsertWithoutInternshipsInput = {
    update: XOR<StudentUpdateWithoutInternshipsInput, StudentUncheckedUpdateWithoutInternshipsInput>
    create: XOR<StudentCreateWithoutInternshipsInput, StudentUncheckedCreateWithoutInternshipsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutInternshipsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutInternshipsInput, StudentUncheckedUpdateWithoutInternshipsInput>
  }

  export type StudentUpdateWithoutInternshipsInput = {
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    cgpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    savedInternships?: SavedInternshipUpdateManyWithoutStudentNestedInput
    skills?: StudentSkillUpdateManyWithoutStudentNestedInput
    mentor?: MentorUpdateOneWithoutStudentsNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutInternshipsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    cgpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    mentorId?: NullableStringFieldUpdateOperationsInput | string | null
    savedInternships?: SavedInternshipUncheckedUpdateManyWithoutStudentNestedInput
    skills?: StudentSkillUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type InternshipCreateWithoutSavedByInput = {
    id?: string
    title: string
    companyName?: string | null
    companyUrl?: string | null
    companyLogo?: string | null
    description?: string | null
    location?: string | null
    mode: $Enums.Mode
    duration: string
    applicationDeadline?: Date | string | null
    requirement: string
    salaryPackage?: string | null
    minCgpa?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.InternshipStatus
    createdAt?: Date | string
    skills?: InternshipSkillCreateNestedManyWithoutInternshipInput
    postedBy: PlacementOfficerCreateNestedOneWithoutInternshipsInput
    applicants?: StudentInternshipCreateNestedManyWithoutInternshipInput
  }

  export type InternshipUncheckedCreateWithoutSavedByInput = {
    id?: string
    title: string
    companyName?: string | null
    companyUrl?: string | null
    companyLogo?: string | null
    description?: string | null
    location?: string | null
    mode: $Enums.Mode
    duration: string
    applicationDeadline?: Date | string | null
    requirement: string
    salaryPackage?: string | null
    minCgpa?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.InternshipStatus
    createdAt?: Date | string
    postedById: string
    skills?: InternshipSkillUncheckedCreateNestedManyWithoutInternshipInput
    applicants?: StudentInternshipUncheckedCreateNestedManyWithoutInternshipInput
  }

  export type InternshipCreateOrConnectWithoutSavedByInput = {
    where: InternshipWhereUniqueInput
    create: XOR<InternshipCreateWithoutSavedByInput, InternshipUncheckedCreateWithoutSavedByInput>
  }

  export type StudentCreateWithoutSavedInternshipsInput = {
    semester?: number | null
    year?: number | null
    cgpa?: Decimal | DecimalJsLike | number | string | null
    resumeUrl?: string | null
    profileCompleted?: boolean
    internships?: StudentInternshipCreateNestedManyWithoutStudentInput
    skills?: StudentSkillCreateNestedManyWithoutStudentInput
    mentor?: MentorCreateNestedOneWithoutStudentsInput
    user: UserCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutSavedInternshipsInput = {
    userId: string
    semester?: number | null
    year?: number | null
    cgpa?: Decimal | DecimalJsLike | number | string | null
    resumeUrl?: string | null
    profileCompleted?: boolean
    mentorId?: string | null
    internships?: StudentInternshipUncheckedCreateNestedManyWithoutStudentInput
    skills?: StudentSkillUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutSavedInternshipsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSavedInternshipsInput, StudentUncheckedCreateWithoutSavedInternshipsInput>
  }

  export type InternshipUpsertWithoutSavedByInput = {
    update: XOR<InternshipUpdateWithoutSavedByInput, InternshipUncheckedUpdateWithoutSavedByInput>
    create: XOR<InternshipCreateWithoutSavedByInput, InternshipUncheckedCreateWithoutSavedByInput>
    where?: InternshipWhereInput
  }

  export type InternshipUpdateToOneWithWhereWithoutSavedByInput = {
    where?: InternshipWhereInput
    data: XOR<InternshipUpdateWithoutSavedByInput, InternshipUncheckedUpdateWithoutSavedByInput>
  }

  export type InternshipUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    mode?: EnumModeFieldUpdateOperationsInput | $Enums.Mode
    duration?: StringFieldUpdateOperationsInput | string
    applicationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requirement?: StringFieldUpdateOperationsInput | string
    salaryPackage?: NullableStringFieldUpdateOperationsInput | string | null
    minCgpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumInternshipStatusFieldUpdateOperationsInput | $Enums.InternshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: InternshipSkillUpdateManyWithoutInternshipNestedInput
    postedBy?: PlacementOfficerUpdateOneRequiredWithoutInternshipsNestedInput
    applicants?: StudentInternshipUpdateManyWithoutInternshipNestedInput
  }

  export type InternshipUncheckedUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    mode?: EnumModeFieldUpdateOperationsInput | $Enums.Mode
    duration?: StringFieldUpdateOperationsInput | string
    applicationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requirement?: StringFieldUpdateOperationsInput | string
    salaryPackage?: NullableStringFieldUpdateOperationsInput | string | null
    minCgpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumInternshipStatusFieldUpdateOperationsInput | $Enums.InternshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedById?: StringFieldUpdateOperationsInput | string
    skills?: InternshipSkillUncheckedUpdateManyWithoutInternshipNestedInput
    applicants?: StudentInternshipUncheckedUpdateManyWithoutInternshipNestedInput
  }

  export type StudentUpsertWithoutSavedInternshipsInput = {
    update: XOR<StudentUpdateWithoutSavedInternshipsInput, StudentUncheckedUpdateWithoutSavedInternshipsInput>
    create: XOR<StudentCreateWithoutSavedInternshipsInput, StudentUncheckedCreateWithoutSavedInternshipsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutSavedInternshipsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutSavedInternshipsInput, StudentUncheckedUpdateWithoutSavedInternshipsInput>
  }

  export type StudentUpdateWithoutSavedInternshipsInput = {
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    cgpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    internships?: StudentInternshipUpdateManyWithoutStudentNestedInput
    skills?: StudentSkillUpdateManyWithoutStudentNestedInput
    mentor?: MentorUpdateOneWithoutStudentsNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutSavedInternshipsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    cgpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    mentorId?: NullableStringFieldUpdateOperationsInput | string | null
    internships?: StudentInternshipUncheckedUpdateManyWithoutStudentNestedInput
    skills?: StudentSkillUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type InternshipSkillCreateWithoutSkillInput = {
    internship: InternshipCreateNestedOneWithoutSkillsInput
  }

  export type InternshipSkillUncheckedCreateWithoutSkillInput = {
    internshipId: string
  }

  export type InternshipSkillCreateOrConnectWithoutSkillInput = {
    where: InternshipSkillWhereUniqueInput
    create: XOR<InternshipSkillCreateWithoutSkillInput, InternshipSkillUncheckedCreateWithoutSkillInput>
  }

  export type InternshipSkillCreateManySkillInputEnvelope = {
    data: InternshipSkillCreateManySkillInput | InternshipSkillCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type StudentSkillCreateWithoutSkillInput = {
    student: StudentCreateNestedOneWithoutSkillsInput
  }

  export type StudentSkillUncheckedCreateWithoutSkillInput = {
    studentId: string
  }

  export type StudentSkillCreateOrConnectWithoutSkillInput = {
    where: StudentSkillWhereUniqueInput
    create: XOR<StudentSkillCreateWithoutSkillInput, StudentSkillUncheckedCreateWithoutSkillInput>
  }

  export type StudentSkillCreateManySkillInputEnvelope = {
    data: StudentSkillCreateManySkillInput | StudentSkillCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type InternshipSkillUpsertWithWhereUniqueWithoutSkillInput = {
    where: InternshipSkillWhereUniqueInput
    update: XOR<InternshipSkillUpdateWithoutSkillInput, InternshipSkillUncheckedUpdateWithoutSkillInput>
    create: XOR<InternshipSkillCreateWithoutSkillInput, InternshipSkillUncheckedCreateWithoutSkillInput>
  }

  export type InternshipSkillUpdateWithWhereUniqueWithoutSkillInput = {
    where: InternshipSkillWhereUniqueInput
    data: XOR<InternshipSkillUpdateWithoutSkillInput, InternshipSkillUncheckedUpdateWithoutSkillInput>
  }

  export type InternshipSkillUpdateManyWithWhereWithoutSkillInput = {
    where: InternshipSkillScalarWhereInput
    data: XOR<InternshipSkillUpdateManyMutationInput, InternshipSkillUncheckedUpdateManyWithoutSkillInput>
  }

  export type StudentSkillUpsertWithWhereUniqueWithoutSkillInput = {
    where: StudentSkillWhereUniqueInput
    update: XOR<StudentSkillUpdateWithoutSkillInput, StudentSkillUncheckedUpdateWithoutSkillInput>
    create: XOR<StudentSkillCreateWithoutSkillInput, StudentSkillUncheckedCreateWithoutSkillInput>
  }

  export type StudentSkillUpdateWithWhereUniqueWithoutSkillInput = {
    where: StudentSkillWhereUniqueInput
    data: XOR<StudentSkillUpdateWithoutSkillInput, StudentSkillUncheckedUpdateWithoutSkillInput>
  }

  export type StudentSkillUpdateManyWithWhereWithoutSkillInput = {
    where: StudentSkillScalarWhereInput
    data: XOR<StudentSkillUpdateManyMutationInput, StudentSkillUncheckedUpdateManyWithoutSkillInput>
  }

  export type SkillCreateWithoutStudentsInput = {
    id?: string
    name: string
    internships?: InternshipSkillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    internships?: InternshipSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutStudentsInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutStudentsInput, SkillUncheckedCreateWithoutStudentsInput>
  }

  export type StudentCreateWithoutSkillsInput = {
    semester?: number | null
    year?: number | null
    cgpa?: Decimal | DecimalJsLike | number | string | null
    resumeUrl?: string | null
    profileCompleted?: boolean
    savedInternships?: SavedInternshipCreateNestedManyWithoutStudentInput
    internships?: StudentInternshipCreateNestedManyWithoutStudentInput
    mentor?: MentorCreateNestedOneWithoutStudentsInput
    user: UserCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutSkillsInput = {
    userId: string
    semester?: number | null
    year?: number | null
    cgpa?: Decimal | DecimalJsLike | number | string | null
    resumeUrl?: string | null
    profileCompleted?: boolean
    mentorId?: string | null
    savedInternships?: SavedInternshipUncheckedCreateNestedManyWithoutStudentInput
    internships?: StudentInternshipUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutSkillsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSkillsInput, StudentUncheckedCreateWithoutSkillsInput>
  }

  export type SkillUpsertWithoutStudentsInput = {
    update: XOR<SkillUpdateWithoutStudentsInput, SkillUncheckedUpdateWithoutStudentsInput>
    create: XOR<SkillCreateWithoutStudentsInput, SkillUncheckedCreateWithoutStudentsInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutStudentsInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutStudentsInput, SkillUncheckedUpdateWithoutStudentsInput>
  }

  export type SkillUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    internships?: InternshipSkillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    internships?: InternshipSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type StudentUpsertWithoutSkillsInput = {
    update: XOR<StudentUpdateWithoutSkillsInput, StudentUncheckedUpdateWithoutSkillsInput>
    create: XOR<StudentCreateWithoutSkillsInput, StudentUncheckedCreateWithoutSkillsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutSkillsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutSkillsInput, StudentUncheckedUpdateWithoutSkillsInput>
  }

  export type StudentUpdateWithoutSkillsInput = {
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    cgpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    savedInternships?: SavedInternshipUpdateManyWithoutStudentNestedInput
    internships?: StudentInternshipUpdateManyWithoutStudentNestedInput
    mentor?: MentorUpdateOneWithoutStudentsNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutSkillsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    cgpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    mentorId?: NullableStringFieldUpdateOperationsInput | string | null
    savedInternships?: SavedInternshipUncheckedUpdateManyWithoutStudentNestedInput
    internships?: StudentInternshipUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type InternshipCreateWithoutSkillsInput = {
    id?: string
    title: string
    companyName?: string | null
    companyUrl?: string | null
    companyLogo?: string | null
    description?: string | null
    location?: string | null
    mode: $Enums.Mode
    duration: string
    applicationDeadline?: Date | string | null
    requirement: string
    salaryPackage?: string | null
    minCgpa?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.InternshipStatus
    createdAt?: Date | string
    postedBy: PlacementOfficerCreateNestedOneWithoutInternshipsInput
    savedBy?: SavedInternshipCreateNestedManyWithoutInternshipInput
    applicants?: StudentInternshipCreateNestedManyWithoutInternshipInput
  }

  export type InternshipUncheckedCreateWithoutSkillsInput = {
    id?: string
    title: string
    companyName?: string | null
    companyUrl?: string | null
    companyLogo?: string | null
    description?: string | null
    location?: string | null
    mode: $Enums.Mode
    duration: string
    applicationDeadline?: Date | string | null
    requirement: string
    salaryPackage?: string | null
    minCgpa?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.InternshipStatus
    createdAt?: Date | string
    postedById: string
    savedBy?: SavedInternshipUncheckedCreateNestedManyWithoutInternshipInput
    applicants?: StudentInternshipUncheckedCreateNestedManyWithoutInternshipInput
  }

  export type InternshipCreateOrConnectWithoutSkillsInput = {
    where: InternshipWhereUniqueInput
    create: XOR<InternshipCreateWithoutSkillsInput, InternshipUncheckedCreateWithoutSkillsInput>
  }

  export type SkillCreateWithoutInternshipsInput = {
    id?: string
    name: string
    students?: StudentSkillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutInternshipsInput = {
    id?: string
    name: string
    students?: StudentSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutInternshipsInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutInternshipsInput, SkillUncheckedCreateWithoutInternshipsInput>
  }

  export type InternshipUpsertWithoutSkillsInput = {
    update: XOR<InternshipUpdateWithoutSkillsInput, InternshipUncheckedUpdateWithoutSkillsInput>
    create: XOR<InternshipCreateWithoutSkillsInput, InternshipUncheckedCreateWithoutSkillsInput>
    where?: InternshipWhereInput
  }

  export type InternshipUpdateToOneWithWhereWithoutSkillsInput = {
    where?: InternshipWhereInput
    data: XOR<InternshipUpdateWithoutSkillsInput, InternshipUncheckedUpdateWithoutSkillsInput>
  }

  export type InternshipUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    mode?: EnumModeFieldUpdateOperationsInput | $Enums.Mode
    duration?: StringFieldUpdateOperationsInput | string
    applicationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requirement?: StringFieldUpdateOperationsInput | string
    salaryPackage?: NullableStringFieldUpdateOperationsInput | string | null
    minCgpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumInternshipStatusFieldUpdateOperationsInput | $Enums.InternshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedBy?: PlacementOfficerUpdateOneRequiredWithoutInternshipsNestedInput
    savedBy?: SavedInternshipUpdateManyWithoutInternshipNestedInput
    applicants?: StudentInternshipUpdateManyWithoutInternshipNestedInput
  }

  export type InternshipUncheckedUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    mode?: EnumModeFieldUpdateOperationsInput | $Enums.Mode
    duration?: StringFieldUpdateOperationsInput | string
    applicationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requirement?: StringFieldUpdateOperationsInput | string
    salaryPackage?: NullableStringFieldUpdateOperationsInput | string | null
    minCgpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumInternshipStatusFieldUpdateOperationsInput | $Enums.InternshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedById?: StringFieldUpdateOperationsInput | string
    savedBy?: SavedInternshipUncheckedUpdateManyWithoutInternshipNestedInput
    applicants?: StudentInternshipUncheckedUpdateManyWithoutInternshipNestedInput
  }

  export type SkillUpsertWithoutInternshipsInput = {
    update: XOR<SkillUpdateWithoutInternshipsInput, SkillUncheckedUpdateWithoutInternshipsInput>
    create: XOR<SkillCreateWithoutInternshipsInput, SkillUncheckedCreateWithoutInternshipsInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutInternshipsInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutInternshipsInput, SkillUncheckedUpdateWithoutInternshipsInput>
  }

  export type SkillUpdateWithoutInternshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    students?: StudentSkillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutInternshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    students?: StudentSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SavedInternshipCreateManyStudentInput = {
    internshipId: string
    savedAt?: Date | string
  }

  export type StudentInternshipCreateManyStudentInput = {
    id?: string
    internshipId: string
    status?: $Enums.StudentInternshipStatus
    certificateUrl?: string | null
    appliedAt?: Date | string
  }

  export type StudentSkillCreateManyStudentInput = {
    skillId: string
  }

  export type SavedInternshipUpdateWithoutStudentInput = {
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internship?: InternshipUpdateOneRequiredWithoutSavedByNestedInput
  }

  export type SavedInternshipUncheckedUpdateWithoutStudentInput = {
    internshipId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedInternshipUncheckedUpdateManyWithoutStudentInput = {
    internshipId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentInternshipUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStudentInternshipStatusFieldUpdateOperationsInput | $Enums.StudentInternshipStatus
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internship?: InternshipUpdateOneRequiredWithoutApplicantsNestedInput
  }

  export type StudentInternshipUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    internshipId?: StringFieldUpdateOperationsInput | string
    status?: EnumStudentInternshipStatusFieldUpdateOperationsInput | $Enums.StudentInternshipStatus
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentInternshipUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    internshipId?: StringFieldUpdateOperationsInput | string
    status?: EnumStudentInternshipStatusFieldUpdateOperationsInput | $Enums.StudentInternshipStatus
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSkillUpdateWithoutStudentInput = {
    skill?: SkillUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentSkillUncheckedUpdateWithoutStudentInput = {
    skillId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentSkillUncheckedUpdateManyWithoutStudentInput = {
    skillId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCreateManyMentorInput = {
    userId: string
    semester?: number | null
    year?: number | null
    cgpa?: Decimal | DecimalJsLike | number | string | null
    resumeUrl?: string | null
    profileCompleted?: boolean
  }

  export type StudentUpdateWithoutMentorInput = {
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    cgpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    savedInternships?: SavedInternshipUpdateManyWithoutStudentNestedInput
    internships?: StudentInternshipUpdateManyWithoutStudentNestedInput
    skills?: StudentSkillUpdateManyWithoutStudentNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutMentorInput = {
    userId?: StringFieldUpdateOperationsInput | string
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    cgpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    savedInternships?: SavedInternshipUncheckedUpdateManyWithoutStudentNestedInput
    internships?: StudentInternshipUncheckedUpdateManyWithoutStudentNestedInput
    skills?: StudentSkillUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutMentorInput = {
    userId?: StringFieldUpdateOperationsInput | string
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    cgpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InternshipCreateManyPostedByInput = {
    id?: string
    title: string
    companyName?: string | null
    companyUrl?: string | null
    companyLogo?: string | null
    description?: string | null
    location?: string | null
    mode: $Enums.Mode
    duration: string
    applicationDeadline?: Date | string | null
    requirement: string
    salaryPackage?: string | null
    minCgpa?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.InternshipStatus
    createdAt?: Date | string
  }

  export type InternshipUpdateWithoutPostedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    mode?: EnumModeFieldUpdateOperationsInput | $Enums.Mode
    duration?: StringFieldUpdateOperationsInput | string
    applicationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requirement?: StringFieldUpdateOperationsInput | string
    salaryPackage?: NullableStringFieldUpdateOperationsInput | string | null
    minCgpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumInternshipStatusFieldUpdateOperationsInput | $Enums.InternshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: InternshipSkillUpdateManyWithoutInternshipNestedInput
    savedBy?: SavedInternshipUpdateManyWithoutInternshipNestedInput
    applicants?: StudentInternshipUpdateManyWithoutInternshipNestedInput
  }

  export type InternshipUncheckedUpdateWithoutPostedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    mode?: EnumModeFieldUpdateOperationsInput | $Enums.Mode
    duration?: StringFieldUpdateOperationsInput | string
    applicationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requirement?: StringFieldUpdateOperationsInput | string
    salaryPackage?: NullableStringFieldUpdateOperationsInput | string | null
    minCgpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumInternshipStatusFieldUpdateOperationsInput | $Enums.InternshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: InternshipSkillUncheckedUpdateManyWithoutInternshipNestedInput
    savedBy?: SavedInternshipUncheckedUpdateManyWithoutInternshipNestedInput
    applicants?: StudentInternshipUncheckedUpdateManyWithoutInternshipNestedInput
  }

  export type InternshipUncheckedUpdateManyWithoutPostedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    mode?: EnumModeFieldUpdateOperationsInput | $Enums.Mode
    duration?: StringFieldUpdateOperationsInput | string
    applicationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requirement?: StringFieldUpdateOperationsInput | string
    salaryPackage?: NullableStringFieldUpdateOperationsInput | string | null
    minCgpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumInternshipStatusFieldUpdateOperationsInput | $Enums.InternshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InternshipSkillCreateManyInternshipInput = {
    skillId: string
  }

  export type SavedInternshipCreateManyInternshipInput = {
    studentId: string
    savedAt?: Date | string
  }

  export type StudentInternshipCreateManyInternshipInput = {
    id?: string
    studentId: string
    status?: $Enums.StudentInternshipStatus
    certificateUrl?: string | null
    appliedAt?: Date | string
  }

  export type InternshipSkillUpdateWithoutInternshipInput = {
    skill?: SkillUpdateOneRequiredWithoutInternshipsNestedInput
  }

  export type InternshipSkillUncheckedUpdateWithoutInternshipInput = {
    skillId?: StringFieldUpdateOperationsInput | string
  }

  export type InternshipSkillUncheckedUpdateManyWithoutInternshipInput = {
    skillId?: StringFieldUpdateOperationsInput | string
  }

  export type SavedInternshipUpdateWithoutInternshipInput = {
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutSavedInternshipsNestedInput
  }

  export type SavedInternshipUncheckedUpdateWithoutInternshipInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedInternshipUncheckedUpdateManyWithoutInternshipInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentInternshipUpdateWithoutInternshipInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStudentInternshipStatusFieldUpdateOperationsInput | $Enums.StudentInternshipStatus
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutInternshipsNestedInput
  }

  export type StudentInternshipUncheckedUpdateWithoutInternshipInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    status?: EnumStudentInternshipStatusFieldUpdateOperationsInput | $Enums.StudentInternshipStatus
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentInternshipUncheckedUpdateManyWithoutInternshipInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    status?: EnumStudentInternshipStatusFieldUpdateOperationsInput | $Enums.StudentInternshipStatus
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InternshipSkillCreateManySkillInput = {
    internshipId: string
  }

  export type StudentSkillCreateManySkillInput = {
    studentId: string
  }

  export type InternshipSkillUpdateWithoutSkillInput = {
    internship?: InternshipUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type InternshipSkillUncheckedUpdateWithoutSkillInput = {
    internshipId?: StringFieldUpdateOperationsInput | string
  }

  export type InternshipSkillUncheckedUpdateManyWithoutSkillInput = {
    internshipId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentSkillUpdateWithoutSkillInput = {
    student?: StudentUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type StudentSkillUncheckedUpdateWithoutSkillInput = {
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentSkillUncheckedUpdateManyWithoutSkillInput = {
    studentId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}