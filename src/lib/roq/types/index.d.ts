/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model finance
 *
 */
export type finance = $Result.DefaultSelection<Prisma.$financePayload>;
/**
 * Model inventory
 *
 */
export type inventory = $Result.DefaultSelection<Prisma.$inventoryPayload>;
/**
 * Model it
 *
 */
export type it = $Result.DefaultSelection<Prisma.$itPayload>;
/**
 * Model laptop
 *
 */
export type laptop = $Result.DefaultSelection<Prisma.$laptopPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.finance`: Exposes CRUD operations for the **finance** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Finances
   * const finances = await prisma.finance.findMany()
   * ```
   */
  get finance(): Prisma.financeDelegate<ExtArgs>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **inventory** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Inventories
   * const inventories = await prisma.inventory.findMany()
   * ```
   */
  get inventory(): Prisma.inventoryDelegate<ExtArgs>;

  /**
   * `prisma.it`: Exposes CRUD operations for the **it** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Its
   * const its = await prisma.it.findMany()
   * ```
   */
  get it(): Prisma.itDelegate<ExtArgs>;

  /**
   * `prisma.laptop`: Exposes CRUD operations for the **laptop** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Laptops
   * const laptops = await prisma.laptop.findMany()
   * ```
   */
  get laptop(): Prisma.laptopDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    company: 'company';
    finance: 'finance';
    inventory: 'inventory';
    it: 'it';
    laptop: 'laptop';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'company' | 'finance' | 'inventory' | 'it' | 'laptop' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      finance: {
        payload: Prisma.$financePayload<ExtArgs>;
        fields: Prisma.financeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.financeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.financeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financePayload>;
          };
          findFirst: {
            args: Prisma.financeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.financeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financePayload>;
          };
          findMany: {
            args: Prisma.financeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financePayload>[];
          };
          create: {
            args: Prisma.financeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financePayload>;
          };
          createMany: {
            args: Prisma.financeCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.financeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financePayload>;
          };
          update: {
            args: Prisma.financeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financePayload>;
          };
          deleteMany: {
            args: Prisma.financeDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.financeUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.financeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financePayload>;
          };
          aggregate: {
            args: Prisma.FinanceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFinance>;
          };
          groupBy: {
            args: Prisma.financeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<FinanceGroupByOutputType>[];
          };
          count: {
            args: Prisma.financeCountArgs<ExtArgs>;
            result: $Utils.Optional<FinanceCountAggregateOutputType> | number;
          };
        };
      };
      inventory: {
        payload: Prisma.$inventoryPayload<ExtArgs>;
        fields: Prisma.inventoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.inventoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.inventoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          findFirst: {
            args: Prisma.inventoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.inventoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          findMany: {
            args: Prisma.inventoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>[];
          };
          create: {
            args: Prisma.inventoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          createMany: {
            args: Prisma.inventoryCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.inventoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          update: {
            args: Prisma.inventoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          deleteMany: {
            args: Prisma.inventoryDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.inventoryUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.inventoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInventory>;
          };
          groupBy: {
            args: Prisma.inventoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<InventoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.inventoryCountArgs<ExtArgs>;
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number;
          };
        };
      };
      it: {
        payload: Prisma.$itPayload<ExtArgs>;
        fields: Prisma.itFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.itFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$itPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.itFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$itPayload>;
          };
          findFirst: {
            args: Prisma.itFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$itPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.itFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$itPayload>;
          };
          findMany: {
            args: Prisma.itFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$itPayload>[];
          };
          create: {
            args: Prisma.itCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$itPayload>;
          };
          createMany: {
            args: Prisma.itCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.itDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$itPayload>;
          };
          update: {
            args: Prisma.itUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$itPayload>;
          };
          deleteMany: {
            args: Prisma.itDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.itUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.itUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$itPayload>;
          };
          aggregate: {
            args: Prisma.ItAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateIt>;
          };
          groupBy: {
            args: Prisma.itGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ItGroupByOutputType>[];
          };
          count: {
            args: Prisma.itCountArgs<ExtArgs>;
            result: $Utils.Optional<ItCountAggregateOutputType> | number;
          };
        };
      };
      laptop: {
        payload: Prisma.$laptopPayload<ExtArgs>;
        fields: Prisma.laptopFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.laptopFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$laptopPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.laptopFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$laptopPayload>;
          };
          findFirst: {
            args: Prisma.laptopFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$laptopPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.laptopFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$laptopPayload>;
          };
          findMany: {
            args: Prisma.laptopFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$laptopPayload>[];
          };
          create: {
            args: Prisma.laptopCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$laptopPayload>;
          };
          createMany: {
            args: Prisma.laptopCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.laptopDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$laptopPayload>;
          };
          update: {
            args: Prisma.laptopUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$laptopPayload>;
          };
          deleteMany: {
            args: Prisma.laptopDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.laptopUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.laptopUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$laptopPayload>;
          };
          aggregate: {
            args: Prisma.LaptopAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLaptop>;
          };
          groupBy: {
            args: Prisma.laptopGroupByArgs<ExtArgs>;
            result: $Utils.Optional<LaptopGroupByOutputType>[];
          };
          count: {
            args: Prisma.laptopCountArgs<ExtArgs>;
            result: $Utils.Optional<LaptopCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type LaptopCountOutputType
   */

  export type LaptopCountOutputType = {
    finance: number;
    inventory: number;
    it: number;
  };

  export type LaptopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    finance?: boolean | LaptopCountOutputTypeCountFinanceArgs;
    inventory?: boolean | LaptopCountOutputTypeCountInventoryArgs;
    it?: boolean | LaptopCountOutputTypeCountItArgs;
  };

  // Custom InputTypes

  /**
   * LaptopCountOutputType without action
   */
  export type LaptopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaptopCountOutputType
     */
    select?: LaptopCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * LaptopCountOutputType without action
   */
  export type LaptopCountOutputTypeCountFinanceArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: financeWhereInput;
  };

  /**
   * LaptopCountOutputType without action
   */
  export type LaptopCountOutputTypeCountInventoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: inventoryWhereInput;
  };

  /**
   * LaptopCountOutputType without action
   */
  export type LaptopCountOutputTypeCountItArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    company: number;
    finance: number;
    inventory: number;
    it: number;
    laptop: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | UserCountOutputTypeCountCompanyArgs;
    finance?: boolean | UserCountOutputTypeCountFinanceArgs;
    inventory?: boolean | UserCountOutputTypeCountInventoryArgs;
    it?: boolean | UserCountOutputTypeCountItArgs;
    laptop?: boolean | UserCountOutputTypeCountLaptopArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: companyWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFinanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: financeWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInventoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: inventoryWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountItArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLaptopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: laptopWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
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
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly user_id: FieldRef<'company', 'String'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model finance
   */

  export type AggregateFinance = {
    _count: FinanceCountAggregateOutputType | null;
    _avg: FinanceAvgAggregateOutputType | null;
    _sum: FinanceSumAggregateOutputType | null;
    _min: FinanceMinAggregateOutputType | null;
    _max: FinanceMaxAggregateOutputType | null;
  };

  export type FinanceAvgAggregateOutputType = {
    purchase_price: number | null;
    depreciation_value: number | null;
    current_value: number | null;
  };

  export type FinanceSumAggregateOutputType = {
    purchase_price: number | null;
    depreciation_value: number | null;
    current_value: number | null;
  };

  export type FinanceMinAggregateOutputType = {
    id: string | null;
    laptop_id: string | null;
    purchase_price: number | null;
    depreciation_value: number | null;
    current_value: number | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type FinanceMaxAggregateOutputType = {
    id: string | null;
    laptop_id: string | null;
    purchase_price: number | null;
    depreciation_value: number | null;
    current_value: number | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type FinanceCountAggregateOutputType = {
    id: number;
    laptop_id: number;
    purchase_price: number;
    depreciation_value: number;
    current_value: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type FinanceAvgAggregateInputType = {
    purchase_price?: true;
    depreciation_value?: true;
    current_value?: true;
  };

  export type FinanceSumAggregateInputType = {
    purchase_price?: true;
    depreciation_value?: true;
    current_value?: true;
  };

  export type FinanceMinAggregateInputType = {
    id?: true;
    laptop_id?: true;
    purchase_price?: true;
    depreciation_value?: true;
    current_value?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type FinanceMaxAggregateInputType = {
    id?: true;
    laptop_id?: true;
    purchase_price?: true;
    depreciation_value?: true;
    current_value?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type FinanceCountAggregateInputType = {
    id?: true;
    laptop_id?: true;
    purchase_price?: true;
    depreciation_value?: true;
    current_value?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type FinanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which finance to aggregate.
     */
    where?: financeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of finances to fetch.
     */
    orderBy?: financeOrderByWithRelationInput | financeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: financeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` finances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` finances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned finances
     **/
    _count?: true | FinanceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: FinanceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: FinanceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FinanceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FinanceMaxAggregateInputType;
  };

  export type GetFinanceAggregateType<T extends FinanceAggregateArgs> = {
    [P in keyof T & keyof AggregateFinance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinance[P]>
      : GetScalarType<T[P], AggregateFinance[P]>;
  };

  export type financeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: financeWhereInput;
    orderBy?: financeOrderByWithAggregationInput | financeOrderByWithAggregationInput[];
    by: FinanceScalarFieldEnum[] | FinanceScalarFieldEnum;
    having?: financeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FinanceCountAggregateInputType | true;
    _avg?: FinanceAvgAggregateInputType;
    _sum?: FinanceSumAggregateInputType;
    _min?: FinanceMinAggregateInputType;
    _max?: FinanceMaxAggregateInputType;
  };

  export type FinanceGroupByOutputType = {
    id: string;
    laptop_id: string;
    purchase_price: number;
    depreciation_value: number;
    current_value: number;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: FinanceCountAggregateOutputType | null;
    _avg: FinanceAvgAggregateOutputType | null;
    _sum: FinanceSumAggregateOutputType | null;
    _min: FinanceMinAggregateOutputType | null;
    _max: FinanceMaxAggregateOutputType | null;
  };

  type GetFinanceGroupByPayload<T extends financeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinanceGroupByOutputType, T['by']> & {
        [P in keyof T & keyof FinanceGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], FinanceGroupByOutputType[P]>
          : GetScalarType<T[P], FinanceGroupByOutputType[P]>;
      }
    >
  >;

  export type financeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      laptop_id?: boolean;
      purchase_price?: boolean;
      depreciation_value?: boolean;
      current_value?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      laptop?: boolean | laptopDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['finance']
  >;

  export type financeSelectScalar = {
    id?: boolean;
    laptop_id?: boolean;
    purchase_price?: boolean;
    depreciation_value?: boolean;
    current_value?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type financeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laptop?: boolean | laptopDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $financePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'finance';
    objects: {
      laptop: Prisma.$laptopPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        laptop_id: string;
        purchase_price: number;
        depreciation_value: number;
        current_value: number;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['finance']
    >;
    composites: {};
  };

  type financeGetPayload<S extends boolean | null | undefined | financeDefaultArgs> = $Result.GetResult<
    Prisma.$financePayload,
    S
  >;

  type financeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    financeFindManyArgs,
    'select' | 'include'
  > & {
    select?: FinanceCountAggregateInputType | true;
  };

  export interface financeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['finance']; meta: { name: 'finance' } };
    /**
     * Find zero or one Finance that matches the filter.
     * @param {financeFindUniqueArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends financeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, financeFindUniqueArgs<ExtArgs>>,
    ): Prisma__financeClient<$Result.GetResult<Prisma.$financePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Finance that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {financeFindUniqueOrThrowArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends financeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, financeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__financeClient<
      $Result.GetResult<Prisma.$financePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Finance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {financeFindFirstArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends financeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, financeFindFirstArgs<ExtArgs>>,
    ): Prisma__financeClient<$Result.GetResult<Prisma.$financePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Finance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {financeFindFirstOrThrowArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends financeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, financeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__financeClient<$Result.GetResult<Prisma.$financePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Finances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {financeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Finances
     * const finances = await prisma.finance.findMany()
     *
     * // Get first 10 Finances
     * const finances = await prisma.finance.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const financeWithIdOnly = await prisma.finance.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends financeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, financeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$financePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Finance.
     * @param {financeCreateArgs} args - Arguments to create a Finance.
     * @example
     * // Create one Finance
     * const Finance = await prisma.finance.create({
     *   data: {
     *     // ... data to create a Finance
     *   }
     * })
     *
     **/
    create<T extends financeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, financeCreateArgs<ExtArgs>>,
    ): Prisma__financeClient<$Result.GetResult<Prisma.$financePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Finances.
     *     @param {financeCreateManyArgs} args - Arguments to create many Finances.
     *     @example
     *     // Create many Finances
     *     const finance = await prisma.finance.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends financeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, financeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Finance.
     * @param {financeDeleteArgs} args - Arguments to delete one Finance.
     * @example
     * // Delete one Finance
     * const Finance = await prisma.finance.delete({
     *   where: {
     *     // ... filter to delete one Finance
     *   }
     * })
     *
     **/
    delete<T extends financeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, financeDeleteArgs<ExtArgs>>,
    ): Prisma__financeClient<$Result.GetResult<Prisma.$financePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Finance.
     * @param {financeUpdateArgs} args - Arguments to update one Finance.
     * @example
     * // Update one Finance
     * const finance = await prisma.finance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends financeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, financeUpdateArgs<ExtArgs>>,
    ): Prisma__financeClient<$Result.GetResult<Prisma.$financePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Finances.
     * @param {financeDeleteManyArgs} args - Arguments to filter Finances to delete.
     * @example
     * // Delete a few Finances
     * const { count } = await prisma.finance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends financeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, financeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Finances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {financeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Finances
     * const finance = await prisma.finance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends financeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, financeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Finance.
     * @param {financeUpsertArgs} args - Arguments to update or create a Finance.
     * @example
     * // Update or create a Finance
     * const finance = await prisma.finance.upsert({
     *   create: {
     *     // ... data to create a Finance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Finance we want to update
     *   }
     * })
     **/
    upsert<T extends financeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, financeUpsertArgs<ExtArgs>>,
    ): Prisma__financeClient<$Result.GetResult<Prisma.$financePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Finances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {financeCountArgs} args - Arguments to filter Finances to count.
     * @example
     * // Count the number of Finances
     * const count = await prisma.finance.count({
     *   where: {
     *     // ... the filter for the Finances we want to count
     *   }
     * })
     **/
    count<T extends financeCountArgs>(
      args?: Subset<T, financeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinanceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Finance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FinanceAggregateArgs>(
      args: Subset<T, FinanceAggregateArgs>,
    ): Prisma.PrismaPromise<GetFinanceAggregateType<T>>;

    /**
     * Group by Finance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {financeGroupByArgs} args - Group by arguments.
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
      T extends financeGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: financeGroupByArgs['orderBy'] }
        : { orderBy?: financeGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, financeGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetFinanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the finance model
     */
    readonly fields: financeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for finance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__financeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    laptop<T extends laptopDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, laptopDefaultArgs<ExtArgs>>,
    ): Prisma__laptopClient<
      $Result.GetResult<Prisma.$laptopPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the finance model
   */
  interface financeFieldRefs {
    readonly id: FieldRef<'finance', 'String'>;
    readonly laptop_id: FieldRef<'finance', 'String'>;
    readonly purchase_price: FieldRef<'finance', 'Int'>;
    readonly depreciation_value: FieldRef<'finance', 'Int'>;
    readonly current_value: FieldRef<'finance', 'Int'>;
    readonly user_id: FieldRef<'finance', 'String'>;
    readonly created_at: FieldRef<'finance', 'DateTime'>;
    readonly updated_at: FieldRef<'finance', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * finance findUnique
   */
  export type financeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance
     */
    select?: financeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financeInclude<ExtArgs> | null;
    /**
     * Filter, which finance to fetch.
     */
    where: financeWhereUniqueInput;
  };

  /**
   * finance findUniqueOrThrow
   */
  export type financeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance
     */
    select?: financeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financeInclude<ExtArgs> | null;
    /**
     * Filter, which finance to fetch.
     */
    where: financeWhereUniqueInput;
  };

  /**
   * finance findFirst
   */
  export type financeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance
     */
    select?: financeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financeInclude<ExtArgs> | null;
    /**
     * Filter, which finance to fetch.
     */
    where?: financeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of finances to fetch.
     */
    orderBy?: financeOrderByWithRelationInput | financeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for finances.
     */
    cursor?: financeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` finances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` finances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of finances.
     */
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[];
  };

  /**
   * finance findFirstOrThrow
   */
  export type financeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance
     */
    select?: financeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financeInclude<ExtArgs> | null;
    /**
     * Filter, which finance to fetch.
     */
    where?: financeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of finances to fetch.
     */
    orderBy?: financeOrderByWithRelationInput | financeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for finances.
     */
    cursor?: financeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` finances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` finances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of finances.
     */
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[];
  };

  /**
   * finance findMany
   */
  export type financeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance
     */
    select?: financeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financeInclude<ExtArgs> | null;
    /**
     * Filter, which finances to fetch.
     */
    where?: financeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of finances to fetch.
     */
    orderBy?: financeOrderByWithRelationInput | financeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing finances.
     */
    cursor?: financeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` finances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` finances.
     */
    skip?: number;
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[];
  };

  /**
   * finance create
   */
  export type financeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance
     */
    select?: financeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financeInclude<ExtArgs> | null;
    /**
     * The data needed to create a finance.
     */
    data: XOR<financeCreateInput, financeUncheckedCreateInput>;
  };

  /**
   * finance createMany
   */
  export type financeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many finances.
     */
    data: financeCreateManyInput | financeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * finance update
   */
  export type financeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance
     */
    select?: financeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financeInclude<ExtArgs> | null;
    /**
     * The data needed to update a finance.
     */
    data: XOR<financeUpdateInput, financeUncheckedUpdateInput>;
    /**
     * Choose, which finance to update.
     */
    where: financeWhereUniqueInput;
  };

  /**
   * finance updateMany
   */
  export type financeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update finances.
     */
    data: XOR<financeUpdateManyMutationInput, financeUncheckedUpdateManyInput>;
    /**
     * Filter which finances to update
     */
    where?: financeWhereInput;
  };

  /**
   * finance upsert
   */
  export type financeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance
     */
    select?: financeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financeInclude<ExtArgs> | null;
    /**
     * The filter to search for the finance to update in case it exists.
     */
    where: financeWhereUniqueInput;
    /**
     * In case the finance found by the `where` argument doesn't exist, create a new finance with this data.
     */
    create: XOR<financeCreateInput, financeUncheckedCreateInput>;
    /**
     * In case the finance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<financeUpdateInput, financeUncheckedUpdateInput>;
  };

  /**
   * finance delete
   */
  export type financeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance
     */
    select?: financeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financeInclude<ExtArgs> | null;
    /**
     * Filter which finance to delete.
     */
    where: financeWhereUniqueInput;
  };

  /**
   * finance deleteMany
   */
  export type financeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which finances to delete
     */
    where?: financeWhereInput;
  };

  /**
   * finance without action
   */
  export type financeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance
     */
    select?: financeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financeInclude<ExtArgs> | null;
  };

  /**
   * Model inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null;
    _avg: InventoryAvgAggregateOutputType | null;
    _sum: InventorySumAggregateOutputType | null;
    _min: InventoryMinAggregateOutputType | null;
    _max: InventoryMaxAggregateOutputType | null;
  };

  export type InventoryAvgAggregateOutputType = {
    quantity: number | null;
  };

  export type InventorySumAggregateOutputType = {
    quantity: number | null;
  };

  export type InventoryMinAggregateOutputType = {
    id: string | null;
    laptop_id: string | null;
    quantity: number | null;
    location: string | null;
    status: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type InventoryMaxAggregateOutputType = {
    id: string | null;
    laptop_id: string | null;
    quantity: number | null;
    location: string | null;
    status: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type InventoryCountAggregateOutputType = {
    id: number;
    laptop_id: number;
    quantity: number;
    location: number;
    status: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type InventoryAvgAggregateInputType = {
    quantity?: true;
  };

  export type InventorySumAggregateInputType = {
    quantity?: true;
  };

  export type InventoryMinAggregateInputType = {
    id?: true;
    laptop_id?: true;
    quantity?: true;
    location?: true;
    status?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type InventoryMaxAggregateInputType = {
    id?: true;
    laptop_id?: true;
    quantity?: true;
    location?: true;
    status?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type InventoryCountAggregateInputType = {
    id?: true;
    laptop_id?: true;
    quantity?: true;
    location?: true;
    status?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventory to aggregate.
     */
    where?: inventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: inventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned inventories
     **/
    _count?: true | InventoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: InventoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: InventorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: InventoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: InventoryMaxAggregateInputType;
  };

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
    [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>;
  };

  export type inventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventoryWhereInput;
    orderBy?: inventoryOrderByWithAggregationInput | inventoryOrderByWithAggregationInput[];
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum;
    having?: inventoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InventoryCountAggregateInputType | true;
    _avg?: InventoryAvgAggregateInputType;
    _sum?: InventorySumAggregateInputType;
    _min?: InventoryMinAggregateInputType;
    _max?: InventoryMaxAggregateInputType;
  };

  export type InventoryGroupByOutputType = {
    id: string;
    laptop_id: string;
    quantity: number;
    location: string;
    status: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: InventoryCountAggregateOutputType | null;
    _avg: InventoryAvgAggregateOutputType | null;
    _sum: InventorySumAggregateOutputType | null;
    _min: InventoryMinAggregateOutputType | null;
    _max: InventoryMaxAggregateOutputType | null;
  };

  type GetInventoryGroupByPayload<T extends inventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> & {
        [P in keyof T & keyof InventoryGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
          : GetScalarType<T[P], InventoryGroupByOutputType[P]>;
      }
    >
  >;

  export type inventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        laptop_id?: boolean;
        quantity?: boolean;
        location?: boolean;
        status?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        laptop?: boolean | laptopDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['inventory']
    >;

  export type inventorySelectScalar = {
    id?: boolean;
    laptop_id?: boolean;
    quantity?: boolean;
    location?: boolean;
    status?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type inventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laptop?: boolean | laptopDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $inventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'inventory';
    objects: {
      laptop: Prisma.$laptopPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        laptop_id: string;
        quantity: number;
        location: string;
        status: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['inventory']
    >;
    composites: {};
  };

  type inventoryGetPayload<S extends boolean | null | undefined | inventoryDefaultArgs> = $Result.GetResult<
    Prisma.$inventoryPayload,
    S
  >;

  type inventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    inventoryFindManyArgs,
    'select' | 'include'
  > & {
    select?: InventoryCountAggregateInputType | true;
  };

  export interface inventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inventory']; meta: { name: 'inventory' } };
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {inventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends inventoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryFindUniqueArgs<ExtArgs>>,
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Inventory that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {inventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends inventoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends inventoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryFindFirstArgs<ExtArgs>>,
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends inventoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     *
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const inventoryWithIdOnly = await prisma.inventory.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends inventoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Inventory.
     * @param {inventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     *
     **/
    create<T extends inventoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryCreateArgs<ExtArgs>>,
    ): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Inventories.
     *     @param {inventoryCreateManyArgs} args - Arguments to create many Inventories.
     *     @example
     *     // Create many Inventories
     *     const inventory = await prisma.inventory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends inventoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Inventory.
     * @param {inventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     *
     **/
    delete<T extends inventoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryDeleteArgs<ExtArgs>>,
    ): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Inventory.
     * @param {inventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends inventoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryUpdateArgs<ExtArgs>>,
    ): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Inventories.
     * @param {inventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends inventoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends inventoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Inventory.
     * @param {inventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     **/
    upsert<T extends inventoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryUpsertArgs<ExtArgs>>,
    ): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
     **/
    count<T extends inventoryCountArgs>(
      args?: Subset<T, inventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryAggregateArgs>(
      args: Subset<T, InventoryAggregateArgs>,
    ): Prisma.PrismaPromise<GetInventoryAggregateType<T>>;

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryGroupByArgs} args - Group by arguments.
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
      T extends inventoryGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inventoryGroupByArgs['orderBy'] }
        : { orderBy?: inventoryGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, inventoryGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the inventory model
     */
    readonly fields: inventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inventoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    laptop<T extends laptopDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, laptopDefaultArgs<ExtArgs>>,
    ): Prisma__laptopClient<
      $Result.GetResult<Prisma.$laptopPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the inventory model
   */
  interface inventoryFieldRefs {
    readonly id: FieldRef<'inventory', 'String'>;
    readonly laptop_id: FieldRef<'inventory', 'String'>;
    readonly quantity: FieldRef<'inventory', 'Int'>;
    readonly location: FieldRef<'inventory', 'String'>;
    readonly status: FieldRef<'inventory', 'String'>;
    readonly user_id: FieldRef<'inventory', 'String'>;
    readonly created_at: FieldRef<'inventory', 'DateTime'>;
    readonly updated_at: FieldRef<'inventory', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * inventory findUnique
   */
  export type inventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput;
  };

  /**
   * inventory findUniqueOrThrow
   */
  export type inventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput;
  };

  /**
   * inventory findFirst
   */
  export type inventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * inventory findFirstOrThrow
   */
  export type inventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * inventory findMany
   */
  export type inventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventories to fetch.
     */
    where?: inventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing inventories.
     */
    cursor?: inventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventories.
     */
    skip?: number;
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * inventory create
   */
  export type inventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a inventory.
     */
    data: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>;
  };

  /**
   * inventory createMany
   */
  export type inventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inventories.
     */
    data: inventoryCreateManyInput | inventoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * inventory update
   */
  export type inventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a inventory.
     */
    data: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>;
    /**
     * Choose, which inventory to update.
     */
    where: inventoryWhereUniqueInput;
  };

  /**
   * inventory updateMany
   */
  export type inventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inventories.
     */
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyInput>;
    /**
     * Filter which inventories to update
     */
    where?: inventoryWhereInput;
  };

  /**
   * inventory upsert
   */
  export type inventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the inventory to update in case it exists.
     */
    where: inventoryWhereUniqueInput;
    /**
     * In case the inventory found by the `where` argument doesn't exist, create a new inventory with this data.
     */
    create: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>;
    /**
     * In case the inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>;
  };

  /**
   * inventory delete
   */
  export type inventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter which inventory to delete.
     */
    where: inventoryWhereUniqueInput;
  };

  /**
   * inventory deleteMany
   */
  export type inventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventories to delete
     */
    where?: inventoryWhereInput;
  };

  /**
   * inventory without action
   */
  export type inventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
  };

  /**
   * Model it
   */

  export type AggregateIt = {
    _count: ItCountAggregateOutputType | null;
    _min: ItMinAggregateOutputType | null;
    _max: ItMaxAggregateOutputType | null;
  };

  export type ItMinAggregateOutputType = {
    id: string | null;
    laptop_id: string | null;
    maintenance_date: Date | null;
    maintenance_notes: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ItMaxAggregateOutputType = {
    id: string | null;
    laptop_id: string | null;
    maintenance_date: Date | null;
    maintenance_notes: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ItCountAggregateOutputType = {
    id: number;
    laptop_id: number;
    maintenance_date: number;
    maintenance_notes: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ItMinAggregateInputType = {
    id?: true;
    laptop_id?: true;
    maintenance_date?: true;
    maintenance_notes?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ItMaxAggregateInputType = {
    id?: true;
    laptop_id?: true;
    maintenance_date?: true;
    maintenance_notes?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ItCountAggregateInputType = {
    id?: true;
    laptop_id?: true;
    maintenance_date?: true;
    maintenance_notes?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ItAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which it to aggregate.
     */
    where?: itWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of its to fetch.
     */
    orderBy?: itOrderByWithRelationInput | itOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: itWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` its from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` its.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned its
     **/
    _count?: true | ItCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ItMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ItMaxAggregateInputType;
  };

  export type GetItAggregateType<T extends ItAggregateArgs> = {
    [P in keyof T & keyof AggregateIt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIt[P]>
      : GetScalarType<T[P], AggregateIt[P]>;
  };

  export type itGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itWhereInput;
    orderBy?: itOrderByWithAggregationInput | itOrderByWithAggregationInput[];
    by: ItScalarFieldEnum[] | ItScalarFieldEnum;
    having?: itScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ItCountAggregateInputType | true;
    _min?: ItMinAggregateInputType;
    _max?: ItMaxAggregateInputType;
  };

  export type ItGroupByOutputType = {
    id: string;
    laptop_id: string;
    maintenance_date: Date;
    maintenance_notes: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ItCountAggregateOutputType | null;
    _min: ItMinAggregateOutputType | null;
    _max: ItMaxAggregateOutputType | null;
  };

  type GetItGroupByPayload<T extends itGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ItGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ItGroupByOutputType[P]>
          : GetScalarType<T[P], ItGroupByOutputType[P]>;
      }
    >
  >;

  export type itSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      laptop_id?: boolean;
      maintenance_date?: boolean;
      maintenance_notes?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      laptop?: boolean | laptopDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['it']
  >;

  export type itSelectScalar = {
    id?: boolean;
    laptop_id?: boolean;
    maintenance_date?: boolean;
    maintenance_notes?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type itInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laptop?: boolean | laptopDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $itPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'it';
    objects: {
      laptop: Prisma.$laptopPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        laptop_id: string;
        maintenance_date: Date;
        maintenance_notes: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['it']
    >;
    composites: {};
  };

  type itGetPayload<S extends boolean | null | undefined | itDefaultArgs> = $Result.GetResult<Prisma.$itPayload, S>;

  type itCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    itFindManyArgs,
    'select' | 'include'
  > & {
    select?: ItCountAggregateInputType | true;
  };

  export interface itDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['it']; meta: { name: 'it' } };
    /**
     * Find zero or one It that matches the filter.
     * @param {itFindUniqueArgs} args - Arguments to find a It
     * @example
     * // Get one It
     * const it = await prisma.it.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends itFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, itFindUniqueArgs<ExtArgs>>,
    ): Prisma__itClient<$Result.GetResult<Prisma.$itPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one It that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {itFindUniqueOrThrowArgs} args - Arguments to find a It
     * @example
     * // Get one It
     * const it = await prisma.it.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends itFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, itFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__itClient<$Result.GetResult<Prisma.$itPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first It that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itFindFirstArgs} args - Arguments to find a It
     * @example
     * // Get one It
     * const it = await prisma.it.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends itFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, itFindFirstArgs<ExtArgs>>,
    ): Prisma__itClient<$Result.GetResult<Prisma.$itPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first It that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itFindFirstOrThrowArgs} args - Arguments to find a It
     * @example
     * // Get one It
     * const it = await prisma.it.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends itFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, itFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__itClient<$Result.GetResult<Prisma.$itPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Its that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Its
     * const its = await prisma.it.findMany()
     *
     * // Get first 10 Its
     * const its = await prisma.it.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const itWithIdOnly = await prisma.it.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends itFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, itFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a It.
     * @param {itCreateArgs} args - Arguments to create a It.
     * @example
     * // Create one It
     * const It = await prisma.it.create({
     *   data: {
     *     // ... data to create a It
     *   }
     * })
     *
     **/
    create<T extends itCreateArgs<ExtArgs>>(
      args: SelectSubset<T, itCreateArgs<ExtArgs>>,
    ): Prisma__itClient<$Result.GetResult<Prisma.$itPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Its.
     *     @param {itCreateManyArgs} args - Arguments to create many Its.
     *     @example
     *     // Create many Its
     *     const it = await prisma.it.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends itCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, itCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a It.
     * @param {itDeleteArgs} args - Arguments to delete one It.
     * @example
     * // Delete one It
     * const It = await prisma.it.delete({
     *   where: {
     *     // ... filter to delete one It
     *   }
     * })
     *
     **/
    delete<T extends itDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, itDeleteArgs<ExtArgs>>,
    ): Prisma__itClient<$Result.GetResult<Prisma.$itPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one It.
     * @param {itUpdateArgs} args - Arguments to update one It.
     * @example
     * // Update one It
     * const it = await prisma.it.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends itUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, itUpdateArgs<ExtArgs>>,
    ): Prisma__itClient<$Result.GetResult<Prisma.$itPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Its.
     * @param {itDeleteManyArgs} args - Arguments to filter Its to delete.
     * @example
     * // Delete a few Its
     * const { count } = await prisma.it.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends itDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, itDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Its.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Its
     * const it = await prisma.it.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends itUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, itUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one It.
     * @param {itUpsertArgs} args - Arguments to update or create a It.
     * @example
     * // Update or create a It
     * const it = await prisma.it.upsert({
     *   create: {
     *     // ... data to create a It
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the It we want to update
     *   }
     * })
     **/
    upsert<T extends itUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, itUpsertArgs<ExtArgs>>,
    ): Prisma__itClient<$Result.GetResult<Prisma.$itPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Its.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itCountArgs} args - Arguments to filter Its to count.
     * @example
     * // Count the number of Its
     * const count = await prisma.it.count({
     *   where: {
     *     // ... the filter for the Its we want to count
     *   }
     * })
     **/
    count<T extends itCountArgs>(
      args?: Subset<T, itCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a It.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItAggregateArgs>(args: Subset<T, ItAggregateArgs>): Prisma.PrismaPromise<GetItAggregateType<T>>;

    /**
     * Group by It.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itGroupByArgs} args - Group by arguments.
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
      T extends itGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: itGroupByArgs['orderBy'] }
        : { orderBy?: itGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, itGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetItGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the it model
     */
    readonly fields: itFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for it.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__itClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs>
    extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    laptop<T extends laptopDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, laptopDefaultArgs<ExtArgs>>,
    ): Prisma__laptopClient<
      $Result.GetResult<Prisma.$laptopPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the it model
   */
  interface itFieldRefs {
    readonly id: FieldRef<'it', 'String'>;
    readonly laptop_id: FieldRef<'it', 'String'>;
    readonly maintenance_date: FieldRef<'it', 'DateTime'>;
    readonly maintenance_notes: FieldRef<'it', 'String'>;
    readonly user_id: FieldRef<'it', 'String'>;
    readonly created_at: FieldRef<'it', 'DateTime'>;
    readonly updated_at: FieldRef<'it', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * it findUnique
   */
  export type itFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the it
     */
    select?: itSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: itInclude<ExtArgs> | null;
    /**
     * Filter, which it to fetch.
     */
    where: itWhereUniqueInput;
  };

  /**
   * it findUniqueOrThrow
   */
  export type itFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the it
     */
    select?: itSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: itInclude<ExtArgs> | null;
    /**
     * Filter, which it to fetch.
     */
    where: itWhereUniqueInput;
  };

  /**
   * it findFirst
   */
  export type itFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the it
     */
    select?: itSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: itInclude<ExtArgs> | null;
    /**
     * Filter, which it to fetch.
     */
    where?: itWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of its to fetch.
     */
    orderBy?: itOrderByWithRelationInput | itOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for its.
     */
    cursor?: itWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` its from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` its.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of its.
     */
    distinct?: ItScalarFieldEnum | ItScalarFieldEnum[];
  };

  /**
   * it findFirstOrThrow
   */
  export type itFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the it
     */
    select?: itSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: itInclude<ExtArgs> | null;
    /**
     * Filter, which it to fetch.
     */
    where?: itWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of its to fetch.
     */
    orderBy?: itOrderByWithRelationInput | itOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for its.
     */
    cursor?: itWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` its from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` its.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of its.
     */
    distinct?: ItScalarFieldEnum | ItScalarFieldEnum[];
  };

  /**
   * it findMany
   */
  export type itFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the it
     */
    select?: itSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: itInclude<ExtArgs> | null;
    /**
     * Filter, which its to fetch.
     */
    where?: itWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of its to fetch.
     */
    orderBy?: itOrderByWithRelationInput | itOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing its.
     */
    cursor?: itWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` its from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` its.
     */
    skip?: number;
    distinct?: ItScalarFieldEnum | ItScalarFieldEnum[];
  };

  /**
   * it create
   */
  export type itCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the it
     */
    select?: itSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: itInclude<ExtArgs> | null;
    /**
     * The data needed to create a it.
     */
    data: XOR<itCreateInput, itUncheckedCreateInput>;
  };

  /**
   * it createMany
   */
  export type itCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many its.
     */
    data: itCreateManyInput | itCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * it update
   */
  export type itUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the it
     */
    select?: itSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: itInclude<ExtArgs> | null;
    /**
     * The data needed to update a it.
     */
    data: XOR<itUpdateInput, itUncheckedUpdateInput>;
    /**
     * Choose, which it to update.
     */
    where: itWhereUniqueInput;
  };

  /**
   * it updateMany
   */
  export type itUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update its.
     */
    data: XOR<itUpdateManyMutationInput, itUncheckedUpdateManyInput>;
    /**
     * Filter which its to update
     */
    where?: itWhereInput;
  };

  /**
   * it upsert
   */
  export type itUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the it
     */
    select?: itSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: itInclude<ExtArgs> | null;
    /**
     * The filter to search for the it to update in case it exists.
     */
    where: itWhereUniqueInput;
    /**
     * In case the it found by the `where` argument doesn't exist, create a new it with this data.
     */
    create: XOR<itCreateInput, itUncheckedCreateInput>;
    /**
     * In case the it was found with the provided `where` argument, update it with this data.
     */
    update: XOR<itUpdateInput, itUncheckedUpdateInput>;
  };

  /**
   * it delete
   */
  export type itDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the it
     */
    select?: itSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: itInclude<ExtArgs> | null;
    /**
     * Filter which it to delete.
     */
    where: itWhereUniqueInput;
  };

  /**
   * it deleteMany
   */
  export type itDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which its to delete
     */
    where?: itWhereInput;
  };

  /**
   * it without action
   */
  export type itDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the it
     */
    select?: itSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: itInclude<ExtArgs> | null;
  };

  /**
   * Model laptop
   */

  export type AggregateLaptop = {
    _count: LaptopCountAggregateOutputType | null;
    _min: LaptopMinAggregateOutputType | null;
    _max: LaptopMaxAggregateOutputType | null;
  };

  export type LaptopMinAggregateOutputType = {
    id: string | null;
    brand: string | null;
    model: string | null;
    serial_number: string | null;
    purchase_date: Date | null;
    warranty_expiry_date: Date | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type LaptopMaxAggregateOutputType = {
    id: string | null;
    brand: string | null;
    model: string | null;
    serial_number: string | null;
    purchase_date: Date | null;
    warranty_expiry_date: Date | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type LaptopCountAggregateOutputType = {
    id: number;
    brand: number;
    model: number;
    serial_number: number;
    purchase_date: number;
    warranty_expiry_date: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type LaptopMinAggregateInputType = {
    id?: true;
    brand?: true;
    model?: true;
    serial_number?: true;
    purchase_date?: true;
    warranty_expiry_date?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type LaptopMaxAggregateInputType = {
    id?: true;
    brand?: true;
    model?: true;
    serial_number?: true;
    purchase_date?: true;
    warranty_expiry_date?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type LaptopCountAggregateInputType = {
    id?: true;
    brand?: true;
    model?: true;
    serial_number?: true;
    purchase_date?: true;
    warranty_expiry_date?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type LaptopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which laptop to aggregate.
     */
    where?: laptopWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of laptops to fetch.
     */
    orderBy?: laptopOrderByWithRelationInput | laptopOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: laptopWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` laptops from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` laptops.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned laptops
     **/
    _count?: true | LaptopCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LaptopMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LaptopMaxAggregateInputType;
  };

  export type GetLaptopAggregateType<T extends LaptopAggregateArgs> = {
    [P in keyof T & keyof AggregateLaptop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLaptop[P]>
      : GetScalarType<T[P], AggregateLaptop[P]>;
  };

  export type laptopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: laptopWhereInput;
    orderBy?: laptopOrderByWithAggregationInput | laptopOrderByWithAggregationInput[];
    by: LaptopScalarFieldEnum[] | LaptopScalarFieldEnum;
    having?: laptopScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LaptopCountAggregateInputType | true;
    _min?: LaptopMinAggregateInputType;
    _max?: LaptopMaxAggregateInputType;
  };

  export type LaptopGroupByOutputType = {
    id: string;
    brand: string;
    model: string;
    serial_number: string;
    purchase_date: Date;
    warranty_expiry_date: Date | null;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: LaptopCountAggregateOutputType | null;
    _min: LaptopMinAggregateOutputType | null;
    _max: LaptopMaxAggregateOutputType | null;
  };

  type GetLaptopGroupByPayload<T extends laptopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LaptopGroupByOutputType, T['by']> & {
        [P in keyof T & keyof LaptopGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], LaptopGroupByOutputType[P]>
          : GetScalarType<T[P], LaptopGroupByOutputType[P]>;
      }
    >
  >;

  export type laptopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      brand?: boolean;
      model?: boolean;
      serial_number?: boolean;
      purchase_date?: boolean;
      warranty_expiry_date?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      finance?: boolean | laptop$financeArgs<ExtArgs>;
      inventory?: boolean | laptop$inventoryArgs<ExtArgs>;
      it?: boolean | laptop$itArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      _count?: boolean | LaptopCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['laptop']
  >;

  export type laptopSelectScalar = {
    id?: boolean;
    brand?: boolean;
    model?: boolean;
    serial_number?: boolean;
    purchase_date?: boolean;
    warranty_expiry_date?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type laptopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    finance?: boolean | laptop$financeArgs<ExtArgs>;
    inventory?: boolean | laptop$inventoryArgs<ExtArgs>;
    it?: boolean | laptop$itArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | LaptopCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $laptopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'laptop';
    objects: {
      finance: Prisma.$financePayload<ExtArgs>[];
      inventory: Prisma.$inventoryPayload<ExtArgs>[];
      it: Prisma.$itPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        brand: string;
        model: string;
        serial_number: string;
        purchase_date: Date;
        warranty_expiry_date: Date | null;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['laptop']
    >;
    composites: {};
  };

  type laptopGetPayload<S extends boolean | null | undefined | laptopDefaultArgs> = $Result.GetResult<
    Prisma.$laptopPayload,
    S
  >;

  type laptopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    laptopFindManyArgs,
    'select' | 'include'
  > & {
    select?: LaptopCountAggregateInputType | true;
  };

  export interface laptopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['laptop']; meta: { name: 'laptop' } };
    /**
     * Find zero or one Laptop that matches the filter.
     * @param {laptopFindUniqueArgs} args - Arguments to find a Laptop
     * @example
     * // Get one Laptop
     * const laptop = await prisma.laptop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends laptopFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, laptopFindUniqueArgs<ExtArgs>>,
    ): Prisma__laptopClient<$Result.GetResult<Prisma.$laptopPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Laptop that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {laptopFindUniqueOrThrowArgs} args - Arguments to find a Laptop
     * @example
     * // Get one Laptop
     * const laptop = await prisma.laptop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends laptopFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, laptopFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__laptopClient<$Result.GetResult<Prisma.$laptopPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Laptop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laptopFindFirstArgs} args - Arguments to find a Laptop
     * @example
     * // Get one Laptop
     * const laptop = await prisma.laptop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends laptopFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, laptopFindFirstArgs<ExtArgs>>,
    ): Prisma__laptopClient<$Result.GetResult<Prisma.$laptopPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Laptop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laptopFindFirstOrThrowArgs} args - Arguments to find a Laptop
     * @example
     * // Get one Laptop
     * const laptop = await prisma.laptop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends laptopFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, laptopFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__laptopClient<$Result.GetResult<Prisma.$laptopPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Laptops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laptopFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Laptops
     * const laptops = await prisma.laptop.findMany()
     *
     * // Get first 10 Laptops
     * const laptops = await prisma.laptop.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const laptopWithIdOnly = await prisma.laptop.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends laptopFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, laptopFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$laptopPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Laptop.
     * @param {laptopCreateArgs} args - Arguments to create a Laptop.
     * @example
     * // Create one Laptop
     * const Laptop = await prisma.laptop.create({
     *   data: {
     *     // ... data to create a Laptop
     *   }
     * })
     *
     **/
    create<T extends laptopCreateArgs<ExtArgs>>(
      args: SelectSubset<T, laptopCreateArgs<ExtArgs>>,
    ): Prisma__laptopClient<$Result.GetResult<Prisma.$laptopPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Laptops.
     *     @param {laptopCreateManyArgs} args - Arguments to create many Laptops.
     *     @example
     *     // Create many Laptops
     *     const laptop = await prisma.laptop.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends laptopCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, laptopCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Laptop.
     * @param {laptopDeleteArgs} args - Arguments to delete one Laptop.
     * @example
     * // Delete one Laptop
     * const Laptop = await prisma.laptop.delete({
     *   where: {
     *     // ... filter to delete one Laptop
     *   }
     * })
     *
     **/
    delete<T extends laptopDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, laptopDeleteArgs<ExtArgs>>,
    ): Prisma__laptopClient<$Result.GetResult<Prisma.$laptopPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Laptop.
     * @param {laptopUpdateArgs} args - Arguments to update one Laptop.
     * @example
     * // Update one Laptop
     * const laptop = await prisma.laptop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends laptopUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, laptopUpdateArgs<ExtArgs>>,
    ): Prisma__laptopClient<$Result.GetResult<Prisma.$laptopPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Laptops.
     * @param {laptopDeleteManyArgs} args - Arguments to filter Laptops to delete.
     * @example
     * // Delete a few Laptops
     * const { count } = await prisma.laptop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends laptopDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, laptopDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Laptops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laptopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Laptops
     * const laptop = await prisma.laptop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends laptopUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, laptopUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Laptop.
     * @param {laptopUpsertArgs} args - Arguments to update or create a Laptop.
     * @example
     * // Update or create a Laptop
     * const laptop = await prisma.laptop.upsert({
     *   create: {
     *     // ... data to create a Laptop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Laptop we want to update
     *   }
     * })
     **/
    upsert<T extends laptopUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, laptopUpsertArgs<ExtArgs>>,
    ): Prisma__laptopClient<$Result.GetResult<Prisma.$laptopPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Laptops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laptopCountArgs} args - Arguments to filter Laptops to count.
     * @example
     * // Count the number of Laptops
     * const count = await prisma.laptop.count({
     *   where: {
     *     // ... the filter for the Laptops we want to count
     *   }
     * })
     **/
    count<T extends laptopCountArgs>(
      args?: Subset<T, laptopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LaptopCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Laptop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaptopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LaptopAggregateArgs>(
      args: Subset<T, LaptopAggregateArgs>,
    ): Prisma.PrismaPromise<GetLaptopAggregateType<T>>;

    /**
     * Group by Laptop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laptopGroupByArgs} args - Group by arguments.
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
      T extends laptopGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: laptopGroupByArgs['orderBy'] }
        : { orderBy?: laptopGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, laptopGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetLaptopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the laptop model
     */
    readonly fields: laptopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for laptop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__laptopClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    finance<T extends laptop$financeArgs<ExtArgs> = {}>(
      args?: Subset<T, laptop$financeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$financePayload<ExtArgs>, T, 'findMany'> | Null>;

    inventory<T extends laptop$inventoryArgs<ExtArgs> = {}>(
      args?: Subset<T, laptop$inventoryArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    it<T extends laptop$itArgs<ExtArgs> = {}>(
      args?: Subset<T, laptop$itArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the laptop model
   */
  interface laptopFieldRefs {
    readonly id: FieldRef<'laptop', 'String'>;
    readonly brand: FieldRef<'laptop', 'String'>;
    readonly model: FieldRef<'laptop', 'String'>;
    readonly serial_number: FieldRef<'laptop', 'String'>;
    readonly purchase_date: FieldRef<'laptop', 'DateTime'>;
    readonly warranty_expiry_date: FieldRef<'laptop', 'DateTime'>;
    readonly user_id: FieldRef<'laptop', 'String'>;
    readonly created_at: FieldRef<'laptop', 'DateTime'>;
    readonly updated_at: FieldRef<'laptop', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * laptop findUnique
   */
  export type laptopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laptop
     */
    select?: laptopSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: laptopInclude<ExtArgs> | null;
    /**
     * Filter, which laptop to fetch.
     */
    where: laptopWhereUniqueInput;
  };

  /**
   * laptop findUniqueOrThrow
   */
  export type laptopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laptop
     */
    select?: laptopSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: laptopInclude<ExtArgs> | null;
    /**
     * Filter, which laptop to fetch.
     */
    where: laptopWhereUniqueInput;
  };

  /**
   * laptop findFirst
   */
  export type laptopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laptop
     */
    select?: laptopSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: laptopInclude<ExtArgs> | null;
    /**
     * Filter, which laptop to fetch.
     */
    where?: laptopWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of laptops to fetch.
     */
    orderBy?: laptopOrderByWithRelationInput | laptopOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for laptops.
     */
    cursor?: laptopWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` laptops from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` laptops.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of laptops.
     */
    distinct?: LaptopScalarFieldEnum | LaptopScalarFieldEnum[];
  };

  /**
   * laptop findFirstOrThrow
   */
  export type laptopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laptop
     */
    select?: laptopSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: laptopInclude<ExtArgs> | null;
    /**
     * Filter, which laptop to fetch.
     */
    where?: laptopWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of laptops to fetch.
     */
    orderBy?: laptopOrderByWithRelationInput | laptopOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for laptops.
     */
    cursor?: laptopWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` laptops from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` laptops.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of laptops.
     */
    distinct?: LaptopScalarFieldEnum | LaptopScalarFieldEnum[];
  };

  /**
   * laptop findMany
   */
  export type laptopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laptop
     */
    select?: laptopSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: laptopInclude<ExtArgs> | null;
    /**
     * Filter, which laptops to fetch.
     */
    where?: laptopWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of laptops to fetch.
     */
    orderBy?: laptopOrderByWithRelationInput | laptopOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing laptops.
     */
    cursor?: laptopWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` laptops from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` laptops.
     */
    skip?: number;
    distinct?: LaptopScalarFieldEnum | LaptopScalarFieldEnum[];
  };

  /**
   * laptop create
   */
  export type laptopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laptop
     */
    select?: laptopSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: laptopInclude<ExtArgs> | null;
    /**
     * The data needed to create a laptop.
     */
    data: XOR<laptopCreateInput, laptopUncheckedCreateInput>;
  };

  /**
   * laptop createMany
   */
  export type laptopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many laptops.
     */
    data: laptopCreateManyInput | laptopCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * laptop update
   */
  export type laptopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laptop
     */
    select?: laptopSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: laptopInclude<ExtArgs> | null;
    /**
     * The data needed to update a laptop.
     */
    data: XOR<laptopUpdateInput, laptopUncheckedUpdateInput>;
    /**
     * Choose, which laptop to update.
     */
    where: laptopWhereUniqueInput;
  };

  /**
   * laptop updateMany
   */
  export type laptopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update laptops.
     */
    data: XOR<laptopUpdateManyMutationInput, laptopUncheckedUpdateManyInput>;
    /**
     * Filter which laptops to update
     */
    where?: laptopWhereInput;
  };

  /**
   * laptop upsert
   */
  export type laptopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laptop
     */
    select?: laptopSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: laptopInclude<ExtArgs> | null;
    /**
     * The filter to search for the laptop to update in case it exists.
     */
    where: laptopWhereUniqueInput;
    /**
     * In case the laptop found by the `where` argument doesn't exist, create a new laptop with this data.
     */
    create: XOR<laptopCreateInput, laptopUncheckedCreateInput>;
    /**
     * In case the laptop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<laptopUpdateInput, laptopUncheckedUpdateInput>;
  };

  /**
   * laptop delete
   */
  export type laptopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laptop
     */
    select?: laptopSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: laptopInclude<ExtArgs> | null;
    /**
     * Filter which laptop to delete.
     */
    where: laptopWhereUniqueInput;
  };

  /**
   * laptop deleteMany
   */
  export type laptopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which laptops to delete
     */
    where?: laptopWhereInput;
  };

  /**
   * laptop.finance
   */
  export type laptop$financeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance
     */
    select?: financeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financeInclude<ExtArgs> | null;
    where?: financeWhereInput;
    orderBy?: financeOrderByWithRelationInput | financeOrderByWithRelationInput[];
    cursor?: financeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[];
  };

  /**
   * laptop.inventory
   */
  export type laptop$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    where?: inventoryWhereInput;
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    cursor?: inventoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * laptop.it
   */
  export type laptop$itArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the it
     */
    select?: itSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: itInclude<ExtArgs> | null;
    where?: itWhereInput;
    orderBy?: itOrderByWithRelationInput | itOrderByWithRelationInput[];
    cursor?: itWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ItScalarFieldEnum | ItScalarFieldEnum[];
  };

  /**
   * laptop without action
   */
  export type laptopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laptop
     */
    select?: laptopSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: laptopInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      company?: boolean | user$companyArgs<ExtArgs>;
      finance?: boolean | user$financeArgs<ExtArgs>;
      inventory?: boolean | user$inventoryArgs<ExtArgs>;
      it?: boolean | user$itArgs<ExtArgs>;
      laptop?: boolean | user$laptopArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | user$companyArgs<ExtArgs>;
    finance?: boolean | user$financeArgs<ExtArgs>;
    inventory?: boolean | user$inventoryArgs<ExtArgs>;
    it?: boolean | user$itArgs<ExtArgs>;
    laptop?: boolean | user$laptopArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>[];
      finance: Prisma.$financePayload<ExtArgs>[];
      inventory: Prisma.$inventoryPayload<ExtArgs>[];
      it: Prisma.$itPayload<ExtArgs>[];
      laptop: Prisma.$laptopPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
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
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'> | Null>;

    finance<T extends user$financeArgs<ExtArgs> = {}>(
      args?: Subset<T, user$financeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$financePayload<ExtArgs>, T, 'findMany'> | Null>;

    inventory<T extends user$inventoryArgs<ExtArgs> = {}>(
      args?: Subset<T, user$inventoryArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    it<T extends user$itArgs<ExtArgs> = {}>(
      args?: Subset<T, user$itArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itPayload<ExtArgs>, T, 'findMany'> | Null>;

    laptop<T extends user$laptopArgs<ExtArgs> = {}>(
      args?: Subset<T, user$laptopArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$laptopPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    cursor?: companyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * user.finance
   */
  export type user$financeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance
     */
    select?: financeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financeInclude<ExtArgs> | null;
    where?: financeWhereInput;
    orderBy?: financeOrderByWithRelationInput | financeOrderByWithRelationInput[];
    cursor?: financeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[];
  };

  /**
   * user.inventory
   */
  export type user$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    where?: inventoryWhereInput;
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    cursor?: inventoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * user.it
   */
  export type user$itArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the it
     */
    select?: itSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: itInclude<ExtArgs> | null;
    where?: itWhereInput;
    orderBy?: itOrderByWithRelationInput | itOrderByWithRelationInput[];
    cursor?: itWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ItScalarFieldEnum | ItScalarFieldEnum[];
  };

  /**
   * user.laptop
   */
  export type user$laptopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laptop
     */
    select?: laptopSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: laptopInclude<ExtArgs> | null;
    where?: laptopWhereInput;
    orderBy?: laptopOrderByWithRelationInput | laptopOrderByWithRelationInput[];
    cursor?: laptopWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: LaptopScalarFieldEnum | LaptopScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const FinanceScalarFieldEnum: {
    id: 'id';
    laptop_id: 'laptop_id';
    purchase_price: 'purchase_price';
    depreciation_value: 'depreciation_value';
    current_value: 'current_value';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type FinanceScalarFieldEnum = (typeof FinanceScalarFieldEnum)[keyof typeof FinanceScalarFieldEnum];

  export const InventoryScalarFieldEnum: {
    id: 'id';
    laptop_id: 'laptop_id';
    quantity: 'quantity';
    location: 'location';
    status: 'status';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum];

  export const ItScalarFieldEnum: {
    id: 'id';
    laptop_id: 'laptop_id';
    maintenance_date: 'maintenance_date';
    maintenance_notes: 'maintenance_notes';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ItScalarFieldEnum = (typeof ItScalarFieldEnum)[keyof typeof ItScalarFieldEnum];

  export const LaptopScalarFieldEnum: {
    id: 'id';
    brand: 'brand';
    model: 'model';
    serial_number: 'serial_number';
    purchase_date: 'purchase_date';
    warranty_expiry_date: 'warranty_expiry_date';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type LaptopScalarFieldEnum = (typeof LaptopScalarFieldEnum)[keyof typeof LaptopScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      user_id?: UuidFilter<'company'> | string;
      tenant_id?: StringFilter<'company'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'company'> | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type financeWhereInput = {
    AND?: financeWhereInput | financeWhereInput[];
    OR?: financeWhereInput[];
    NOT?: financeWhereInput | financeWhereInput[];
    id?: UuidFilter<'finance'> | string;
    laptop_id?: UuidFilter<'finance'> | string;
    purchase_price?: IntFilter<'finance'> | number;
    depreciation_value?: IntFilter<'finance'> | number;
    current_value?: IntFilter<'finance'> | number;
    user_id?: UuidFilter<'finance'> | string;
    created_at?: DateTimeFilter<'finance'> | Date | string;
    updated_at?: DateTimeFilter<'finance'> | Date | string;
    laptop?: XOR<LaptopRelationFilter, laptopWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type financeOrderByWithRelationInput = {
    id?: SortOrder;
    laptop_id?: SortOrder;
    purchase_price?: SortOrder;
    depreciation_value?: SortOrder;
    current_value?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    laptop?: laptopOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type financeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: financeWhereInput | financeWhereInput[];
      OR?: financeWhereInput[];
      NOT?: financeWhereInput | financeWhereInput[];
      laptop_id?: UuidFilter<'finance'> | string;
      purchase_price?: IntFilter<'finance'> | number;
      depreciation_value?: IntFilter<'finance'> | number;
      current_value?: IntFilter<'finance'> | number;
      user_id?: UuidFilter<'finance'> | string;
      created_at?: DateTimeFilter<'finance'> | Date | string;
      updated_at?: DateTimeFilter<'finance'> | Date | string;
      laptop?: XOR<LaptopRelationFilter, laptopWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type financeOrderByWithAggregationInput = {
    id?: SortOrder;
    laptop_id?: SortOrder;
    purchase_price?: SortOrder;
    depreciation_value?: SortOrder;
    current_value?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: financeCountOrderByAggregateInput;
    _avg?: financeAvgOrderByAggregateInput;
    _max?: financeMaxOrderByAggregateInput;
    _min?: financeMinOrderByAggregateInput;
    _sum?: financeSumOrderByAggregateInput;
  };

  export type financeScalarWhereWithAggregatesInput = {
    AND?: financeScalarWhereWithAggregatesInput | financeScalarWhereWithAggregatesInput[];
    OR?: financeScalarWhereWithAggregatesInput[];
    NOT?: financeScalarWhereWithAggregatesInput | financeScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'finance'> | string;
    laptop_id?: UuidWithAggregatesFilter<'finance'> | string;
    purchase_price?: IntWithAggregatesFilter<'finance'> | number;
    depreciation_value?: IntWithAggregatesFilter<'finance'> | number;
    current_value?: IntWithAggregatesFilter<'finance'> | number;
    user_id?: UuidWithAggregatesFilter<'finance'> | string;
    created_at?: DateTimeWithAggregatesFilter<'finance'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'finance'> | Date | string;
  };

  export type inventoryWhereInput = {
    AND?: inventoryWhereInput | inventoryWhereInput[];
    OR?: inventoryWhereInput[];
    NOT?: inventoryWhereInput | inventoryWhereInput[];
    id?: UuidFilter<'inventory'> | string;
    laptop_id?: UuidFilter<'inventory'> | string;
    quantity?: IntFilter<'inventory'> | number;
    location?: StringFilter<'inventory'> | string;
    status?: StringFilter<'inventory'> | string;
    user_id?: UuidFilter<'inventory'> | string;
    created_at?: DateTimeFilter<'inventory'> | Date | string;
    updated_at?: DateTimeFilter<'inventory'> | Date | string;
    laptop?: XOR<LaptopRelationFilter, laptopWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type inventoryOrderByWithRelationInput = {
    id?: SortOrder;
    laptop_id?: SortOrder;
    quantity?: SortOrder;
    location?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    laptop?: laptopOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type inventoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: inventoryWhereInput | inventoryWhereInput[];
      OR?: inventoryWhereInput[];
      NOT?: inventoryWhereInput | inventoryWhereInput[];
      laptop_id?: UuidFilter<'inventory'> | string;
      quantity?: IntFilter<'inventory'> | number;
      location?: StringFilter<'inventory'> | string;
      status?: StringFilter<'inventory'> | string;
      user_id?: UuidFilter<'inventory'> | string;
      created_at?: DateTimeFilter<'inventory'> | Date | string;
      updated_at?: DateTimeFilter<'inventory'> | Date | string;
      laptop?: XOR<LaptopRelationFilter, laptopWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type inventoryOrderByWithAggregationInput = {
    id?: SortOrder;
    laptop_id?: SortOrder;
    quantity?: SortOrder;
    location?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: inventoryCountOrderByAggregateInput;
    _avg?: inventoryAvgOrderByAggregateInput;
    _max?: inventoryMaxOrderByAggregateInput;
    _min?: inventoryMinOrderByAggregateInput;
    _sum?: inventorySumOrderByAggregateInput;
  };

  export type inventoryScalarWhereWithAggregatesInput = {
    AND?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[];
    OR?: inventoryScalarWhereWithAggregatesInput[];
    NOT?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'inventory'> | string;
    laptop_id?: UuidWithAggregatesFilter<'inventory'> | string;
    quantity?: IntWithAggregatesFilter<'inventory'> | number;
    location?: StringWithAggregatesFilter<'inventory'> | string;
    status?: StringWithAggregatesFilter<'inventory'> | string;
    user_id?: UuidWithAggregatesFilter<'inventory'> | string;
    created_at?: DateTimeWithAggregatesFilter<'inventory'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'inventory'> | Date | string;
  };

  export type itWhereInput = {
    AND?: itWhereInput | itWhereInput[];
    OR?: itWhereInput[];
    NOT?: itWhereInput | itWhereInput[];
    id?: UuidFilter<'it'> | string;
    laptop_id?: UuidFilter<'it'> | string;
    maintenance_date?: DateTimeFilter<'it'> | Date | string;
    maintenance_notes?: StringFilter<'it'> | string;
    user_id?: UuidFilter<'it'> | string;
    created_at?: DateTimeFilter<'it'> | Date | string;
    updated_at?: DateTimeFilter<'it'> | Date | string;
    laptop?: XOR<LaptopRelationFilter, laptopWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type itOrderByWithRelationInput = {
    id?: SortOrder;
    laptop_id?: SortOrder;
    maintenance_date?: SortOrder;
    maintenance_notes?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    laptop?: laptopOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type itWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: itWhereInput | itWhereInput[];
      OR?: itWhereInput[];
      NOT?: itWhereInput | itWhereInput[];
      laptop_id?: UuidFilter<'it'> | string;
      maintenance_date?: DateTimeFilter<'it'> | Date | string;
      maintenance_notes?: StringFilter<'it'> | string;
      user_id?: UuidFilter<'it'> | string;
      created_at?: DateTimeFilter<'it'> | Date | string;
      updated_at?: DateTimeFilter<'it'> | Date | string;
      laptop?: XOR<LaptopRelationFilter, laptopWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type itOrderByWithAggregationInput = {
    id?: SortOrder;
    laptop_id?: SortOrder;
    maintenance_date?: SortOrder;
    maintenance_notes?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: itCountOrderByAggregateInput;
    _max?: itMaxOrderByAggregateInput;
    _min?: itMinOrderByAggregateInput;
  };

  export type itScalarWhereWithAggregatesInput = {
    AND?: itScalarWhereWithAggregatesInput | itScalarWhereWithAggregatesInput[];
    OR?: itScalarWhereWithAggregatesInput[];
    NOT?: itScalarWhereWithAggregatesInput | itScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'it'> | string;
    laptop_id?: UuidWithAggregatesFilter<'it'> | string;
    maintenance_date?: DateTimeWithAggregatesFilter<'it'> | Date | string;
    maintenance_notes?: StringWithAggregatesFilter<'it'> | string;
    user_id?: UuidWithAggregatesFilter<'it'> | string;
    created_at?: DateTimeWithAggregatesFilter<'it'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'it'> | Date | string;
  };

  export type laptopWhereInput = {
    AND?: laptopWhereInput | laptopWhereInput[];
    OR?: laptopWhereInput[];
    NOT?: laptopWhereInput | laptopWhereInput[];
    id?: UuidFilter<'laptop'> | string;
    brand?: StringFilter<'laptop'> | string;
    model?: StringFilter<'laptop'> | string;
    serial_number?: StringFilter<'laptop'> | string;
    purchase_date?: DateTimeFilter<'laptop'> | Date | string;
    warranty_expiry_date?: DateTimeNullableFilter<'laptop'> | Date | string | null;
    user_id?: UuidFilter<'laptop'> | string;
    created_at?: DateTimeFilter<'laptop'> | Date | string;
    updated_at?: DateTimeFilter<'laptop'> | Date | string;
    finance?: FinanceListRelationFilter;
    inventory?: InventoryListRelationFilter;
    it?: ItListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type laptopOrderByWithRelationInput = {
    id?: SortOrder;
    brand?: SortOrder;
    model?: SortOrder;
    serial_number?: SortOrder;
    purchase_date?: SortOrder;
    warranty_expiry_date?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    finance?: financeOrderByRelationAggregateInput;
    inventory?: inventoryOrderByRelationAggregateInput;
    it?: itOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
  };

  export type laptopWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: laptopWhereInput | laptopWhereInput[];
      OR?: laptopWhereInput[];
      NOT?: laptopWhereInput | laptopWhereInput[];
      brand?: StringFilter<'laptop'> | string;
      model?: StringFilter<'laptop'> | string;
      serial_number?: StringFilter<'laptop'> | string;
      purchase_date?: DateTimeFilter<'laptop'> | Date | string;
      warranty_expiry_date?: DateTimeNullableFilter<'laptop'> | Date | string | null;
      user_id?: UuidFilter<'laptop'> | string;
      created_at?: DateTimeFilter<'laptop'> | Date | string;
      updated_at?: DateTimeFilter<'laptop'> | Date | string;
      finance?: FinanceListRelationFilter;
      inventory?: InventoryListRelationFilter;
      it?: ItListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type laptopOrderByWithAggregationInput = {
    id?: SortOrder;
    brand?: SortOrder;
    model?: SortOrder;
    serial_number?: SortOrder;
    purchase_date?: SortOrder;
    warranty_expiry_date?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: laptopCountOrderByAggregateInput;
    _max?: laptopMaxOrderByAggregateInput;
    _min?: laptopMinOrderByAggregateInput;
  };

  export type laptopScalarWhereWithAggregatesInput = {
    AND?: laptopScalarWhereWithAggregatesInput | laptopScalarWhereWithAggregatesInput[];
    OR?: laptopScalarWhereWithAggregatesInput[];
    NOT?: laptopScalarWhereWithAggregatesInput | laptopScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'laptop'> | string;
    brand?: StringWithAggregatesFilter<'laptop'> | string;
    model?: StringWithAggregatesFilter<'laptop'> | string;
    serial_number?: StringWithAggregatesFilter<'laptop'> | string;
    purchase_date?: DateTimeWithAggregatesFilter<'laptop'> | Date | string;
    warranty_expiry_date?: DateTimeNullableWithAggregatesFilter<'laptop'> | Date | string | null;
    user_id?: UuidWithAggregatesFilter<'laptop'> | string;
    created_at?: DateTimeWithAggregatesFilter<'laptop'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'laptop'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    company?: CompanyListRelationFilter;
    finance?: FinanceListRelationFilter;
    inventory?: InventoryListRelationFilter;
    it?: ItListRelationFilter;
    laptop?: LaptopListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByRelationAggregateInput;
    finance?: financeOrderByRelationAggregateInput;
    inventory?: inventoryOrderByRelationAggregateInput;
    it?: itOrderByRelationAggregateInput;
    laptop?: laptopOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      company?: CompanyListRelationFilter;
      finance?: FinanceListRelationFilter;
      inventory?: InventoryListRelationFilter;
      it?: ItListRelationFilter;
      laptop?: LaptopListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type financeCreateInput = {
    id?: string;
    purchase_price: number;
    depreciation_value: number;
    current_value: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    laptop: laptopCreateNestedOneWithoutFinanceInput;
    user: userCreateNestedOneWithoutFinanceInput;
  };

  export type financeUncheckedCreateInput = {
    id?: string;
    laptop_id: string;
    purchase_price: number;
    depreciation_value: number;
    current_value: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type financeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    purchase_price?: IntFieldUpdateOperationsInput | number;
    depreciation_value?: IntFieldUpdateOperationsInput | number;
    current_value?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    laptop?: laptopUpdateOneRequiredWithoutFinanceNestedInput;
    user?: userUpdateOneRequiredWithoutFinanceNestedInput;
  };

  export type financeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    laptop_id?: StringFieldUpdateOperationsInput | string;
    purchase_price?: IntFieldUpdateOperationsInput | number;
    depreciation_value?: IntFieldUpdateOperationsInput | number;
    current_value?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type financeCreateManyInput = {
    id?: string;
    laptop_id: string;
    purchase_price: number;
    depreciation_value: number;
    current_value: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type financeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    purchase_price?: IntFieldUpdateOperationsInput | number;
    depreciation_value?: IntFieldUpdateOperationsInput | number;
    current_value?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type financeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    laptop_id?: StringFieldUpdateOperationsInput | string;
    purchase_price?: IntFieldUpdateOperationsInput | number;
    depreciation_value?: IntFieldUpdateOperationsInput | number;
    current_value?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type inventoryCreateInput = {
    id?: string;
    quantity: number;
    location: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    laptop: laptopCreateNestedOneWithoutInventoryInput;
    user: userCreateNestedOneWithoutInventoryInput;
  };

  export type inventoryUncheckedCreateInput = {
    id?: string;
    laptop_id: string;
    quantity: number;
    location: string;
    status: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type inventoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    location?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    laptop?: laptopUpdateOneRequiredWithoutInventoryNestedInput;
    user?: userUpdateOneRequiredWithoutInventoryNestedInput;
  };

  export type inventoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    laptop_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    location?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type inventoryCreateManyInput = {
    id?: string;
    laptop_id: string;
    quantity: number;
    location: string;
    status: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type inventoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    location?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type inventoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    laptop_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    location?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type itCreateInput = {
    id?: string;
    maintenance_date: Date | string;
    maintenance_notes: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    laptop: laptopCreateNestedOneWithoutItInput;
    user: userCreateNestedOneWithoutItInput;
  };

  export type itUncheckedCreateInput = {
    id?: string;
    laptop_id: string;
    maintenance_date: Date | string;
    maintenance_notes: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type itUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    maintenance_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    maintenance_notes?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    laptop?: laptopUpdateOneRequiredWithoutItNestedInput;
    user?: userUpdateOneRequiredWithoutItNestedInput;
  };

  export type itUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    laptop_id?: StringFieldUpdateOperationsInput | string;
    maintenance_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    maintenance_notes?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type itCreateManyInput = {
    id?: string;
    laptop_id: string;
    maintenance_date: Date | string;
    maintenance_notes: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type itUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    maintenance_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    maintenance_notes?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type itUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    laptop_id?: StringFieldUpdateOperationsInput | string;
    maintenance_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    maintenance_notes?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type laptopCreateInput = {
    id?: string;
    brand: string;
    model: string;
    serial_number: string;
    purchase_date: Date | string;
    warranty_expiry_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance?: financeCreateNestedManyWithoutLaptopInput;
    inventory?: inventoryCreateNestedManyWithoutLaptopInput;
    it?: itCreateNestedManyWithoutLaptopInput;
    user: userCreateNestedOneWithoutLaptopInput;
  };

  export type laptopUncheckedCreateInput = {
    id?: string;
    brand: string;
    model: string;
    serial_number: string;
    purchase_date: Date | string;
    warranty_expiry_date?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance?: financeUncheckedCreateNestedManyWithoutLaptopInput;
    inventory?: inventoryUncheckedCreateNestedManyWithoutLaptopInput;
    it?: itUncheckedCreateNestedManyWithoutLaptopInput;
  };

  export type laptopUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    serial_number?: StringFieldUpdateOperationsInput | string;
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    warranty_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance?: financeUpdateManyWithoutLaptopNestedInput;
    inventory?: inventoryUpdateManyWithoutLaptopNestedInput;
    it?: itUpdateManyWithoutLaptopNestedInput;
    user?: userUpdateOneRequiredWithoutLaptopNestedInput;
  };

  export type laptopUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    serial_number?: StringFieldUpdateOperationsInput | string;
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    warranty_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance?: financeUncheckedUpdateManyWithoutLaptopNestedInput;
    inventory?: inventoryUncheckedUpdateManyWithoutLaptopNestedInput;
    it?: itUncheckedUpdateManyWithoutLaptopNestedInput;
  };

  export type laptopCreateManyInput = {
    id?: string;
    brand: string;
    model: string;
    serial_number: string;
    purchase_date: Date | string;
    warranty_expiry_date?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type laptopUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    serial_number?: StringFieldUpdateOperationsInput | string;
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    warranty_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type laptopUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    serial_number?: StringFieldUpdateOperationsInput | string;
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    warranty_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    finance?: financeCreateNestedManyWithoutUserInput;
    inventory?: inventoryCreateNestedManyWithoutUserInput;
    it?: itCreateNestedManyWithoutUserInput;
    laptop?: laptopCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    finance?: financeUncheckedCreateNestedManyWithoutUserInput;
    inventory?: inventoryUncheckedCreateNestedManyWithoutUserInput;
    it?: itUncheckedCreateNestedManyWithoutUserInput;
    laptop?: laptopUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    finance?: financeUpdateManyWithoutUserNestedInput;
    inventory?: inventoryUpdateManyWithoutUserNestedInput;
    it?: itUpdateManyWithoutUserNestedInput;
    laptop?: laptopUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    finance?: financeUncheckedUpdateManyWithoutUserNestedInput;
    inventory?: inventoryUncheckedUpdateManyWithoutUserNestedInput;
    it?: itUncheckedUpdateManyWithoutUserNestedInput;
    laptop?: laptopUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type LaptopRelationFilter = {
    is?: laptopWhereInput;
    isNot?: laptopWhereInput;
  };

  export type financeCountOrderByAggregateInput = {
    id?: SortOrder;
    laptop_id?: SortOrder;
    purchase_price?: SortOrder;
    depreciation_value?: SortOrder;
    current_value?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type financeAvgOrderByAggregateInput = {
    purchase_price?: SortOrder;
    depreciation_value?: SortOrder;
    current_value?: SortOrder;
  };

  export type financeMaxOrderByAggregateInput = {
    id?: SortOrder;
    laptop_id?: SortOrder;
    purchase_price?: SortOrder;
    depreciation_value?: SortOrder;
    current_value?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type financeMinOrderByAggregateInput = {
    id?: SortOrder;
    laptop_id?: SortOrder;
    purchase_price?: SortOrder;
    depreciation_value?: SortOrder;
    current_value?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type financeSumOrderByAggregateInput = {
    purchase_price?: SortOrder;
    depreciation_value?: SortOrder;
    current_value?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type inventoryCountOrderByAggregateInput = {
    id?: SortOrder;
    laptop_id?: SortOrder;
    quantity?: SortOrder;
    location?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type inventoryAvgOrderByAggregateInput = {
    quantity?: SortOrder;
  };

  export type inventoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    laptop_id?: SortOrder;
    quantity?: SortOrder;
    location?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type inventoryMinOrderByAggregateInput = {
    id?: SortOrder;
    laptop_id?: SortOrder;
    quantity?: SortOrder;
    location?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type inventorySumOrderByAggregateInput = {
    quantity?: SortOrder;
  };

  export type itCountOrderByAggregateInput = {
    id?: SortOrder;
    laptop_id?: SortOrder;
    maintenance_date?: SortOrder;
    maintenance_notes?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type itMaxOrderByAggregateInput = {
    id?: SortOrder;
    laptop_id?: SortOrder;
    maintenance_date?: SortOrder;
    maintenance_notes?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type itMinOrderByAggregateInput = {
    id?: SortOrder;
    laptop_id?: SortOrder;
    maintenance_date?: SortOrder;
    maintenance_notes?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type FinanceListRelationFilter = {
    every?: financeWhereInput;
    some?: financeWhereInput;
    none?: financeWhereInput;
  };

  export type InventoryListRelationFilter = {
    every?: inventoryWhereInput;
    some?: inventoryWhereInput;
    none?: inventoryWhereInput;
  };

  export type ItListRelationFilter = {
    every?: itWhereInput;
    some?: itWhereInput;
    none?: itWhereInput;
  };

  export type financeOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type inventoryOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type itOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type laptopCountOrderByAggregateInput = {
    id?: SortOrder;
    brand?: SortOrder;
    model?: SortOrder;
    serial_number?: SortOrder;
    purchase_date?: SortOrder;
    warranty_expiry_date?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type laptopMaxOrderByAggregateInput = {
    id?: SortOrder;
    brand?: SortOrder;
    model?: SortOrder;
    serial_number?: SortOrder;
    purchase_date?: SortOrder;
    warranty_expiry_date?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type laptopMinOrderByAggregateInput = {
    id?: SortOrder;
    brand?: SortOrder;
    model?: SortOrder;
    serial_number?: SortOrder;
    purchase_date?: SortOrder;
    warranty_expiry_date?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type CompanyListRelationFilter = {
    every?: companyWhereInput;
    some?: companyWhereInput;
    none?: companyWhereInput;
  };

  export type LaptopListRelationFilter = {
    every?: laptopWhereInput;
    some?: laptopWhereInput;
    none?: laptopWhereInput;
  };

  export type companyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type laptopOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCreateNestedOneWithoutCompanyInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    upsert?: userUpsertWithoutCompanyInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCompanyInput, userUpdateWithoutCompanyInput>,
      userUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type laptopCreateNestedOneWithoutFinanceInput = {
    create?: XOR<laptopCreateWithoutFinanceInput, laptopUncheckedCreateWithoutFinanceInput>;
    connectOrCreate?: laptopCreateOrConnectWithoutFinanceInput;
    connect?: laptopWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutFinanceInput = {
    create?: XOR<userCreateWithoutFinanceInput, userUncheckedCreateWithoutFinanceInput>;
    connectOrCreate?: userCreateOrConnectWithoutFinanceInput;
    connect?: userWhereUniqueInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type laptopUpdateOneRequiredWithoutFinanceNestedInput = {
    create?: XOR<laptopCreateWithoutFinanceInput, laptopUncheckedCreateWithoutFinanceInput>;
    connectOrCreate?: laptopCreateOrConnectWithoutFinanceInput;
    upsert?: laptopUpsertWithoutFinanceInput;
    connect?: laptopWhereUniqueInput;
    update?: XOR<
      XOR<laptopUpdateToOneWithWhereWithoutFinanceInput, laptopUpdateWithoutFinanceInput>,
      laptopUncheckedUpdateWithoutFinanceInput
    >;
  };

  export type userUpdateOneRequiredWithoutFinanceNestedInput = {
    create?: XOR<userCreateWithoutFinanceInput, userUncheckedCreateWithoutFinanceInput>;
    connectOrCreate?: userCreateOrConnectWithoutFinanceInput;
    upsert?: userUpsertWithoutFinanceInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutFinanceInput, userUpdateWithoutFinanceInput>,
      userUncheckedUpdateWithoutFinanceInput
    >;
  };

  export type laptopCreateNestedOneWithoutInventoryInput = {
    create?: XOR<laptopCreateWithoutInventoryInput, laptopUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: laptopCreateOrConnectWithoutInventoryInput;
    connect?: laptopWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutInventoryInput = {
    create?: XOR<userCreateWithoutInventoryInput, userUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: userCreateOrConnectWithoutInventoryInput;
    connect?: userWhereUniqueInput;
  };

  export type laptopUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<laptopCreateWithoutInventoryInput, laptopUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: laptopCreateOrConnectWithoutInventoryInput;
    upsert?: laptopUpsertWithoutInventoryInput;
    connect?: laptopWhereUniqueInput;
    update?: XOR<
      XOR<laptopUpdateToOneWithWhereWithoutInventoryInput, laptopUpdateWithoutInventoryInput>,
      laptopUncheckedUpdateWithoutInventoryInput
    >;
  };

  export type userUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<userCreateWithoutInventoryInput, userUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: userCreateOrConnectWithoutInventoryInput;
    upsert?: userUpsertWithoutInventoryInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutInventoryInput, userUpdateWithoutInventoryInput>,
      userUncheckedUpdateWithoutInventoryInput
    >;
  };

  export type laptopCreateNestedOneWithoutItInput = {
    create?: XOR<laptopCreateWithoutItInput, laptopUncheckedCreateWithoutItInput>;
    connectOrCreate?: laptopCreateOrConnectWithoutItInput;
    connect?: laptopWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutItInput = {
    create?: XOR<userCreateWithoutItInput, userUncheckedCreateWithoutItInput>;
    connectOrCreate?: userCreateOrConnectWithoutItInput;
    connect?: userWhereUniqueInput;
  };

  export type laptopUpdateOneRequiredWithoutItNestedInput = {
    create?: XOR<laptopCreateWithoutItInput, laptopUncheckedCreateWithoutItInput>;
    connectOrCreate?: laptopCreateOrConnectWithoutItInput;
    upsert?: laptopUpsertWithoutItInput;
    connect?: laptopWhereUniqueInput;
    update?: XOR<
      XOR<laptopUpdateToOneWithWhereWithoutItInput, laptopUpdateWithoutItInput>,
      laptopUncheckedUpdateWithoutItInput
    >;
  };

  export type userUpdateOneRequiredWithoutItNestedInput = {
    create?: XOR<userCreateWithoutItInput, userUncheckedCreateWithoutItInput>;
    connectOrCreate?: userCreateOrConnectWithoutItInput;
    upsert?: userUpsertWithoutItInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutItInput, userUpdateWithoutItInput>,
      userUncheckedUpdateWithoutItInput
    >;
  };

  export type financeCreateNestedManyWithoutLaptopInput = {
    create?:
      | XOR<financeCreateWithoutLaptopInput, financeUncheckedCreateWithoutLaptopInput>
      | financeCreateWithoutLaptopInput[]
      | financeUncheckedCreateWithoutLaptopInput[];
    connectOrCreate?: financeCreateOrConnectWithoutLaptopInput | financeCreateOrConnectWithoutLaptopInput[];
    createMany?: financeCreateManyLaptopInputEnvelope;
    connect?: financeWhereUniqueInput | financeWhereUniqueInput[];
  };

  export type inventoryCreateNestedManyWithoutLaptopInput = {
    create?:
      | XOR<inventoryCreateWithoutLaptopInput, inventoryUncheckedCreateWithoutLaptopInput>
      | inventoryCreateWithoutLaptopInput[]
      | inventoryUncheckedCreateWithoutLaptopInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutLaptopInput | inventoryCreateOrConnectWithoutLaptopInput[];
    createMany?: inventoryCreateManyLaptopInputEnvelope;
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
  };

  export type itCreateNestedManyWithoutLaptopInput = {
    create?:
      | XOR<itCreateWithoutLaptopInput, itUncheckedCreateWithoutLaptopInput>
      | itCreateWithoutLaptopInput[]
      | itUncheckedCreateWithoutLaptopInput[];
    connectOrCreate?: itCreateOrConnectWithoutLaptopInput | itCreateOrConnectWithoutLaptopInput[];
    createMany?: itCreateManyLaptopInputEnvelope;
    connect?: itWhereUniqueInput | itWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutLaptopInput = {
    create?: XOR<userCreateWithoutLaptopInput, userUncheckedCreateWithoutLaptopInput>;
    connectOrCreate?: userCreateOrConnectWithoutLaptopInput;
    connect?: userWhereUniqueInput;
  };

  export type financeUncheckedCreateNestedManyWithoutLaptopInput = {
    create?:
      | XOR<financeCreateWithoutLaptopInput, financeUncheckedCreateWithoutLaptopInput>
      | financeCreateWithoutLaptopInput[]
      | financeUncheckedCreateWithoutLaptopInput[];
    connectOrCreate?: financeCreateOrConnectWithoutLaptopInput | financeCreateOrConnectWithoutLaptopInput[];
    createMany?: financeCreateManyLaptopInputEnvelope;
    connect?: financeWhereUniqueInput | financeWhereUniqueInput[];
  };

  export type inventoryUncheckedCreateNestedManyWithoutLaptopInput = {
    create?:
      | XOR<inventoryCreateWithoutLaptopInput, inventoryUncheckedCreateWithoutLaptopInput>
      | inventoryCreateWithoutLaptopInput[]
      | inventoryUncheckedCreateWithoutLaptopInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutLaptopInput | inventoryCreateOrConnectWithoutLaptopInput[];
    createMany?: inventoryCreateManyLaptopInputEnvelope;
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
  };

  export type itUncheckedCreateNestedManyWithoutLaptopInput = {
    create?:
      | XOR<itCreateWithoutLaptopInput, itUncheckedCreateWithoutLaptopInput>
      | itCreateWithoutLaptopInput[]
      | itUncheckedCreateWithoutLaptopInput[];
    connectOrCreate?: itCreateOrConnectWithoutLaptopInput | itCreateOrConnectWithoutLaptopInput[];
    createMany?: itCreateManyLaptopInputEnvelope;
    connect?: itWhereUniqueInput | itWhereUniqueInput[];
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type financeUpdateManyWithoutLaptopNestedInput = {
    create?:
      | XOR<financeCreateWithoutLaptopInput, financeUncheckedCreateWithoutLaptopInput>
      | financeCreateWithoutLaptopInput[]
      | financeUncheckedCreateWithoutLaptopInput[];
    connectOrCreate?: financeCreateOrConnectWithoutLaptopInput | financeCreateOrConnectWithoutLaptopInput[];
    upsert?: financeUpsertWithWhereUniqueWithoutLaptopInput | financeUpsertWithWhereUniqueWithoutLaptopInput[];
    createMany?: financeCreateManyLaptopInputEnvelope;
    set?: financeWhereUniqueInput | financeWhereUniqueInput[];
    disconnect?: financeWhereUniqueInput | financeWhereUniqueInput[];
    delete?: financeWhereUniqueInput | financeWhereUniqueInput[];
    connect?: financeWhereUniqueInput | financeWhereUniqueInput[];
    update?: financeUpdateWithWhereUniqueWithoutLaptopInput | financeUpdateWithWhereUniqueWithoutLaptopInput[];
    updateMany?: financeUpdateManyWithWhereWithoutLaptopInput | financeUpdateManyWithWhereWithoutLaptopInput[];
    deleteMany?: financeScalarWhereInput | financeScalarWhereInput[];
  };

  export type inventoryUpdateManyWithoutLaptopNestedInput = {
    create?:
      | XOR<inventoryCreateWithoutLaptopInput, inventoryUncheckedCreateWithoutLaptopInput>
      | inventoryCreateWithoutLaptopInput[]
      | inventoryUncheckedCreateWithoutLaptopInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutLaptopInput | inventoryCreateOrConnectWithoutLaptopInput[];
    upsert?: inventoryUpsertWithWhereUniqueWithoutLaptopInput | inventoryUpsertWithWhereUniqueWithoutLaptopInput[];
    createMany?: inventoryCreateManyLaptopInputEnvelope;
    set?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    disconnect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    delete?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    update?: inventoryUpdateWithWhereUniqueWithoutLaptopInput | inventoryUpdateWithWhereUniqueWithoutLaptopInput[];
    updateMany?: inventoryUpdateManyWithWhereWithoutLaptopInput | inventoryUpdateManyWithWhereWithoutLaptopInput[];
    deleteMany?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
  };

  export type itUpdateManyWithoutLaptopNestedInput = {
    create?:
      | XOR<itCreateWithoutLaptopInput, itUncheckedCreateWithoutLaptopInput>
      | itCreateWithoutLaptopInput[]
      | itUncheckedCreateWithoutLaptopInput[];
    connectOrCreate?: itCreateOrConnectWithoutLaptopInput | itCreateOrConnectWithoutLaptopInput[];
    upsert?: itUpsertWithWhereUniqueWithoutLaptopInput | itUpsertWithWhereUniqueWithoutLaptopInput[];
    createMany?: itCreateManyLaptopInputEnvelope;
    set?: itWhereUniqueInput | itWhereUniqueInput[];
    disconnect?: itWhereUniqueInput | itWhereUniqueInput[];
    delete?: itWhereUniqueInput | itWhereUniqueInput[];
    connect?: itWhereUniqueInput | itWhereUniqueInput[];
    update?: itUpdateWithWhereUniqueWithoutLaptopInput | itUpdateWithWhereUniqueWithoutLaptopInput[];
    updateMany?: itUpdateManyWithWhereWithoutLaptopInput | itUpdateManyWithWhereWithoutLaptopInput[];
    deleteMany?: itScalarWhereInput | itScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutLaptopNestedInput = {
    create?: XOR<userCreateWithoutLaptopInput, userUncheckedCreateWithoutLaptopInput>;
    connectOrCreate?: userCreateOrConnectWithoutLaptopInput;
    upsert?: userUpsertWithoutLaptopInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutLaptopInput, userUpdateWithoutLaptopInput>,
      userUncheckedUpdateWithoutLaptopInput
    >;
  };

  export type financeUncheckedUpdateManyWithoutLaptopNestedInput = {
    create?:
      | XOR<financeCreateWithoutLaptopInput, financeUncheckedCreateWithoutLaptopInput>
      | financeCreateWithoutLaptopInput[]
      | financeUncheckedCreateWithoutLaptopInput[];
    connectOrCreate?: financeCreateOrConnectWithoutLaptopInput | financeCreateOrConnectWithoutLaptopInput[];
    upsert?: financeUpsertWithWhereUniqueWithoutLaptopInput | financeUpsertWithWhereUniqueWithoutLaptopInput[];
    createMany?: financeCreateManyLaptopInputEnvelope;
    set?: financeWhereUniqueInput | financeWhereUniqueInput[];
    disconnect?: financeWhereUniqueInput | financeWhereUniqueInput[];
    delete?: financeWhereUniqueInput | financeWhereUniqueInput[];
    connect?: financeWhereUniqueInput | financeWhereUniqueInput[];
    update?: financeUpdateWithWhereUniqueWithoutLaptopInput | financeUpdateWithWhereUniqueWithoutLaptopInput[];
    updateMany?: financeUpdateManyWithWhereWithoutLaptopInput | financeUpdateManyWithWhereWithoutLaptopInput[];
    deleteMany?: financeScalarWhereInput | financeScalarWhereInput[];
  };

  export type inventoryUncheckedUpdateManyWithoutLaptopNestedInput = {
    create?:
      | XOR<inventoryCreateWithoutLaptopInput, inventoryUncheckedCreateWithoutLaptopInput>
      | inventoryCreateWithoutLaptopInput[]
      | inventoryUncheckedCreateWithoutLaptopInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutLaptopInput | inventoryCreateOrConnectWithoutLaptopInput[];
    upsert?: inventoryUpsertWithWhereUniqueWithoutLaptopInput | inventoryUpsertWithWhereUniqueWithoutLaptopInput[];
    createMany?: inventoryCreateManyLaptopInputEnvelope;
    set?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    disconnect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    delete?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    update?: inventoryUpdateWithWhereUniqueWithoutLaptopInput | inventoryUpdateWithWhereUniqueWithoutLaptopInput[];
    updateMany?: inventoryUpdateManyWithWhereWithoutLaptopInput | inventoryUpdateManyWithWhereWithoutLaptopInput[];
    deleteMany?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
  };

  export type itUncheckedUpdateManyWithoutLaptopNestedInput = {
    create?:
      | XOR<itCreateWithoutLaptopInput, itUncheckedCreateWithoutLaptopInput>
      | itCreateWithoutLaptopInput[]
      | itUncheckedCreateWithoutLaptopInput[];
    connectOrCreate?: itCreateOrConnectWithoutLaptopInput | itCreateOrConnectWithoutLaptopInput[];
    upsert?: itUpsertWithWhereUniqueWithoutLaptopInput | itUpsertWithWhereUniqueWithoutLaptopInput[];
    createMany?: itCreateManyLaptopInputEnvelope;
    set?: itWhereUniqueInput | itWhereUniqueInput[];
    disconnect?: itWhereUniqueInput | itWhereUniqueInput[];
    delete?: itWhereUniqueInput | itWhereUniqueInput[];
    connect?: itWhereUniqueInput | itWhereUniqueInput[];
    update?: itUpdateWithWhereUniqueWithoutLaptopInput | itUpdateWithWhereUniqueWithoutLaptopInput[];
    updateMany?: itUpdateManyWithWhereWithoutLaptopInput | itUpdateManyWithWhereWithoutLaptopInput[];
    deleteMany?: itScalarWhereInput | itScalarWhereInput[];
  };

  export type companyCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type financeCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<financeCreateWithoutUserInput, financeUncheckedCreateWithoutUserInput>
      | financeCreateWithoutUserInput[]
      | financeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: financeCreateOrConnectWithoutUserInput | financeCreateOrConnectWithoutUserInput[];
    createMany?: financeCreateManyUserInputEnvelope;
    connect?: financeWhereUniqueInput | financeWhereUniqueInput[];
  };

  export type inventoryCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<inventoryCreateWithoutUserInput, inventoryUncheckedCreateWithoutUserInput>
      | inventoryCreateWithoutUserInput[]
      | inventoryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutUserInput | inventoryCreateOrConnectWithoutUserInput[];
    createMany?: inventoryCreateManyUserInputEnvelope;
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
  };

  export type itCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<itCreateWithoutUserInput, itUncheckedCreateWithoutUserInput>
      | itCreateWithoutUserInput[]
      | itUncheckedCreateWithoutUserInput[];
    connectOrCreate?: itCreateOrConnectWithoutUserInput | itCreateOrConnectWithoutUserInput[];
    createMany?: itCreateManyUserInputEnvelope;
    connect?: itWhereUniqueInput | itWhereUniqueInput[];
  };

  export type laptopCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<laptopCreateWithoutUserInput, laptopUncheckedCreateWithoutUserInput>
      | laptopCreateWithoutUserInput[]
      | laptopUncheckedCreateWithoutUserInput[];
    connectOrCreate?: laptopCreateOrConnectWithoutUserInput | laptopCreateOrConnectWithoutUserInput[];
    createMany?: laptopCreateManyUserInputEnvelope;
    connect?: laptopWhereUniqueInput | laptopWhereUniqueInput[];
  };

  export type companyUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type financeUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<financeCreateWithoutUserInput, financeUncheckedCreateWithoutUserInput>
      | financeCreateWithoutUserInput[]
      | financeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: financeCreateOrConnectWithoutUserInput | financeCreateOrConnectWithoutUserInput[];
    createMany?: financeCreateManyUserInputEnvelope;
    connect?: financeWhereUniqueInput | financeWhereUniqueInput[];
  };

  export type inventoryUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<inventoryCreateWithoutUserInput, inventoryUncheckedCreateWithoutUserInput>
      | inventoryCreateWithoutUserInput[]
      | inventoryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutUserInput | inventoryCreateOrConnectWithoutUserInput[];
    createMany?: inventoryCreateManyUserInputEnvelope;
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
  };

  export type itUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<itCreateWithoutUserInput, itUncheckedCreateWithoutUserInput>
      | itCreateWithoutUserInput[]
      | itUncheckedCreateWithoutUserInput[];
    connectOrCreate?: itCreateOrConnectWithoutUserInput | itCreateOrConnectWithoutUserInput[];
    createMany?: itCreateManyUserInputEnvelope;
    connect?: itWhereUniqueInput | itWhereUniqueInput[];
  };

  export type laptopUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<laptopCreateWithoutUserInput, laptopUncheckedCreateWithoutUserInput>
      | laptopCreateWithoutUserInput[]
      | laptopUncheckedCreateWithoutUserInput[];
    connectOrCreate?: laptopCreateOrConnectWithoutUserInput | laptopCreateOrConnectWithoutUserInput[];
    createMany?: laptopCreateManyUserInputEnvelope;
    connect?: laptopWhereUniqueInput | laptopWhereUniqueInput[];
  };

  export type companyUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type financeUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<financeCreateWithoutUserInput, financeUncheckedCreateWithoutUserInput>
      | financeCreateWithoutUserInput[]
      | financeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: financeCreateOrConnectWithoutUserInput | financeCreateOrConnectWithoutUserInput[];
    upsert?: financeUpsertWithWhereUniqueWithoutUserInput | financeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: financeCreateManyUserInputEnvelope;
    set?: financeWhereUniqueInput | financeWhereUniqueInput[];
    disconnect?: financeWhereUniqueInput | financeWhereUniqueInput[];
    delete?: financeWhereUniqueInput | financeWhereUniqueInput[];
    connect?: financeWhereUniqueInput | financeWhereUniqueInput[];
    update?: financeUpdateWithWhereUniqueWithoutUserInput | financeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: financeUpdateManyWithWhereWithoutUserInput | financeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: financeScalarWhereInput | financeScalarWhereInput[];
  };

  export type inventoryUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<inventoryCreateWithoutUserInput, inventoryUncheckedCreateWithoutUserInput>
      | inventoryCreateWithoutUserInput[]
      | inventoryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutUserInput | inventoryCreateOrConnectWithoutUserInput[];
    upsert?: inventoryUpsertWithWhereUniqueWithoutUserInput | inventoryUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: inventoryCreateManyUserInputEnvelope;
    set?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    disconnect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    delete?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    update?: inventoryUpdateWithWhereUniqueWithoutUserInput | inventoryUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: inventoryUpdateManyWithWhereWithoutUserInput | inventoryUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
  };

  export type itUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<itCreateWithoutUserInput, itUncheckedCreateWithoutUserInput>
      | itCreateWithoutUserInput[]
      | itUncheckedCreateWithoutUserInput[];
    connectOrCreate?: itCreateOrConnectWithoutUserInput | itCreateOrConnectWithoutUserInput[];
    upsert?: itUpsertWithWhereUniqueWithoutUserInput | itUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: itCreateManyUserInputEnvelope;
    set?: itWhereUniqueInput | itWhereUniqueInput[];
    disconnect?: itWhereUniqueInput | itWhereUniqueInput[];
    delete?: itWhereUniqueInput | itWhereUniqueInput[];
    connect?: itWhereUniqueInput | itWhereUniqueInput[];
    update?: itUpdateWithWhereUniqueWithoutUserInput | itUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: itUpdateManyWithWhereWithoutUserInput | itUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: itScalarWhereInput | itScalarWhereInput[];
  };

  export type laptopUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<laptopCreateWithoutUserInput, laptopUncheckedCreateWithoutUserInput>
      | laptopCreateWithoutUserInput[]
      | laptopUncheckedCreateWithoutUserInput[];
    connectOrCreate?: laptopCreateOrConnectWithoutUserInput | laptopCreateOrConnectWithoutUserInput[];
    upsert?: laptopUpsertWithWhereUniqueWithoutUserInput | laptopUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: laptopCreateManyUserInputEnvelope;
    set?: laptopWhereUniqueInput | laptopWhereUniqueInput[];
    disconnect?: laptopWhereUniqueInput | laptopWhereUniqueInput[];
    delete?: laptopWhereUniqueInput | laptopWhereUniqueInput[];
    connect?: laptopWhereUniqueInput | laptopWhereUniqueInput[];
    update?: laptopUpdateWithWhereUniqueWithoutUserInput | laptopUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: laptopUpdateManyWithWhereWithoutUserInput | laptopUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: laptopScalarWhereInput | laptopScalarWhereInput[];
  };

  export type companyUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type financeUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<financeCreateWithoutUserInput, financeUncheckedCreateWithoutUserInput>
      | financeCreateWithoutUserInput[]
      | financeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: financeCreateOrConnectWithoutUserInput | financeCreateOrConnectWithoutUserInput[];
    upsert?: financeUpsertWithWhereUniqueWithoutUserInput | financeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: financeCreateManyUserInputEnvelope;
    set?: financeWhereUniqueInput | financeWhereUniqueInput[];
    disconnect?: financeWhereUniqueInput | financeWhereUniqueInput[];
    delete?: financeWhereUniqueInput | financeWhereUniqueInput[];
    connect?: financeWhereUniqueInput | financeWhereUniqueInput[];
    update?: financeUpdateWithWhereUniqueWithoutUserInput | financeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: financeUpdateManyWithWhereWithoutUserInput | financeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: financeScalarWhereInput | financeScalarWhereInput[];
  };

  export type inventoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<inventoryCreateWithoutUserInput, inventoryUncheckedCreateWithoutUserInput>
      | inventoryCreateWithoutUserInput[]
      | inventoryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutUserInput | inventoryCreateOrConnectWithoutUserInput[];
    upsert?: inventoryUpsertWithWhereUniqueWithoutUserInput | inventoryUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: inventoryCreateManyUserInputEnvelope;
    set?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    disconnect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    delete?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    update?: inventoryUpdateWithWhereUniqueWithoutUserInput | inventoryUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: inventoryUpdateManyWithWhereWithoutUserInput | inventoryUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
  };

  export type itUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<itCreateWithoutUserInput, itUncheckedCreateWithoutUserInput>
      | itCreateWithoutUserInput[]
      | itUncheckedCreateWithoutUserInput[];
    connectOrCreate?: itCreateOrConnectWithoutUserInput | itCreateOrConnectWithoutUserInput[];
    upsert?: itUpsertWithWhereUniqueWithoutUserInput | itUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: itCreateManyUserInputEnvelope;
    set?: itWhereUniqueInput | itWhereUniqueInput[];
    disconnect?: itWhereUniqueInput | itWhereUniqueInput[];
    delete?: itWhereUniqueInput | itWhereUniqueInput[];
    connect?: itWhereUniqueInput | itWhereUniqueInput[];
    update?: itUpdateWithWhereUniqueWithoutUserInput | itUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: itUpdateManyWithWhereWithoutUserInput | itUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: itScalarWhereInput | itScalarWhereInput[];
  };

  export type laptopUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<laptopCreateWithoutUserInput, laptopUncheckedCreateWithoutUserInput>
      | laptopCreateWithoutUserInput[]
      | laptopUncheckedCreateWithoutUserInput[];
    connectOrCreate?: laptopCreateOrConnectWithoutUserInput | laptopCreateOrConnectWithoutUserInput[];
    upsert?: laptopUpsertWithWhereUniqueWithoutUserInput | laptopUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: laptopCreateManyUserInputEnvelope;
    set?: laptopWhereUniqueInput | laptopWhereUniqueInput[];
    disconnect?: laptopWhereUniqueInput | laptopWhereUniqueInput[];
    delete?: laptopWhereUniqueInput | laptopWhereUniqueInput[];
    connect?: laptopWhereUniqueInput | laptopWhereUniqueInput[];
    update?: laptopUpdateWithWhereUniqueWithoutUserInput | laptopUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: laptopUpdateManyWithWhereWithoutUserInput | laptopUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: laptopScalarWhereInput | laptopScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance?: financeCreateNestedManyWithoutUserInput;
    inventory?: inventoryCreateNestedManyWithoutUserInput;
    it?: itCreateNestedManyWithoutUserInput;
    laptop?: laptopCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance?: financeUncheckedCreateNestedManyWithoutUserInput;
    inventory?: inventoryUncheckedCreateNestedManyWithoutUserInput;
    it?: itUncheckedCreateNestedManyWithoutUserInput;
    laptop?: laptopUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type userUpsertWithoutCompanyInput = {
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCompanyInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance?: financeUpdateManyWithoutUserNestedInput;
    inventory?: inventoryUpdateManyWithoutUserNestedInput;
    it?: itUpdateManyWithoutUserNestedInput;
    laptop?: laptopUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance?: financeUncheckedUpdateManyWithoutUserNestedInput;
    inventory?: inventoryUncheckedUpdateManyWithoutUserNestedInput;
    it?: itUncheckedUpdateManyWithoutUserNestedInput;
    laptop?: laptopUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type laptopCreateWithoutFinanceInput = {
    id?: string;
    brand: string;
    model: string;
    serial_number: string;
    purchase_date: Date | string;
    warranty_expiry_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory?: inventoryCreateNestedManyWithoutLaptopInput;
    it?: itCreateNestedManyWithoutLaptopInput;
    user: userCreateNestedOneWithoutLaptopInput;
  };

  export type laptopUncheckedCreateWithoutFinanceInput = {
    id?: string;
    brand: string;
    model: string;
    serial_number: string;
    purchase_date: Date | string;
    warranty_expiry_date?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory?: inventoryUncheckedCreateNestedManyWithoutLaptopInput;
    it?: itUncheckedCreateNestedManyWithoutLaptopInput;
  };

  export type laptopCreateOrConnectWithoutFinanceInput = {
    where: laptopWhereUniqueInput;
    create: XOR<laptopCreateWithoutFinanceInput, laptopUncheckedCreateWithoutFinanceInput>;
  };

  export type userCreateWithoutFinanceInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    inventory?: inventoryCreateNestedManyWithoutUserInput;
    it?: itCreateNestedManyWithoutUserInput;
    laptop?: laptopCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutFinanceInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    inventory?: inventoryUncheckedCreateNestedManyWithoutUserInput;
    it?: itUncheckedCreateNestedManyWithoutUserInput;
    laptop?: laptopUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutFinanceInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutFinanceInput, userUncheckedCreateWithoutFinanceInput>;
  };

  export type laptopUpsertWithoutFinanceInput = {
    update: XOR<laptopUpdateWithoutFinanceInput, laptopUncheckedUpdateWithoutFinanceInput>;
    create: XOR<laptopCreateWithoutFinanceInput, laptopUncheckedCreateWithoutFinanceInput>;
    where?: laptopWhereInput;
  };

  export type laptopUpdateToOneWithWhereWithoutFinanceInput = {
    where?: laptopWhereInput;
    data: XOR<laptopUpdateWithoutFinanceInput, laptopUncheckedUpdateWithoutFinanceInput>;
  };

  export type laptopUpdateWithoutFinanceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    serial_number?: StringFieldUpdateOperationsInput | string;
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    warranty_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: inventoryUpdateManyWithoutLaptopNestedInput;
    it?: itUpdateManyWithoutLaptopNestedInput;
    user?: userUpdateOneRequiredWithoutLaptopNestedInput;
  };

  export type laptopUncheckedUpdateWithoutFinanceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    serial_number?: StringFieldUpdateOperationsInput | string;
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    warranty_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: inventoryUncheckedUpdateManyWithoutLaptopNestedInput;
    it?: itUncheckedUpdateManyWithoutLaptopNestedInput;
  };

  export type userUpsertWithoutFinanceInput = {
    update: XOR<userUpdateWithoutFinanceInput, userUncheckedUpdateWithoutFinanceInput>;
    create: XOR<userCreateWithoutFinanceInput, userUncheckedCreateWithoutFinanceInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutFinanceInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutFinanceInput, userUncheckedUpdateWithoutFinanceInput>;
  };

  export type userUpdateWithoutFinanceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    inventory?: inventoryUpdateManyWithoutUserNestedInput;
    it?: itUpdateManyWithoutUserNestedInput;
    laptop?: laptopUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutFinanceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    inventory?: inventoryUncheckedUpdateManyWithoutUserNestedInput;
    it?: itUncheckedUpdateManyWithoutUserNestedInput;
    laptop?: laptopUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type laptopCreateWithoutInventoryInput = {
    id?: string;
    brand: string;
    model: string;
    serial_number: string;
    purchase_date: Date | string;
    warranty_expiry_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance?: financeCreateNestedManyWithoutLaptopInput;
    it?: itCreateNestedManyWithoutLaptopInput;
    user: userCreateNestedOneWithoutLaptopInput;
  };

  export type laptopUncheckedCreateWithoutInventoryInput = {
    id?: string;
    brand: string;
    model: string;
    serial_number: string;
    purchase_date: Date | string;
    warranty_expiry_date?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance?: financeUncheckedCreateNestedManyWithoutLaptopInput;
    it?: itUncheckedCreateNestedManyWithoutLaptopInput;
  };

  export type laptopCreateOrConnectWithoutInventoryInput = {
    where: laptopWhereUniqueInput;
    create: XOR<laptopCreateWithoutInventoryInput, laptopUncheckedCreateWithoutInventoryInput>;
  };

  export type userCreateWithoutInventoryInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    finance?: financeCreateNestedManyWithoutUserInput;
    it?: itCreateNestedManyWithoutUserInput;
    laptop?: laptopCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutInventoryInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    finance?: financeUncheckedCreateNestedManyWithoutUserInput;
    it?: itUncheckedCreateNestedManyWithoutUserInput;
    laptop?: laptopUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutInventoryInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutInventoryInput, userUncheckedCreateWithoutInventoryInput>;
  };

  export type laptopUpsertWithoutInventoryInput = {
    update: XOR<laptopUpdateWithoutInventoryInput, laptopUncheckedUpdateWithoutInventoryInput>;
    create: XOR<laptopCreateWithoutInventoryInput, laptopUncheckedCreateWithoutInventoryInput>;
    where?: laptopWhereInput;
  };

  export type laptopUpdateToOneWithWhereWithoutInventoryInput = {
    where?: laptopWhereInput;
    data: XOR<laptopUpdateWithoutInventoryInput, laptopUncheckedUpdateWithoutInventoryInput>;
  };

  export type laptopUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    serial_number?: StringFieldUpdateOperationsInput | string;
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    warranty_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance?: financeUpdateManyWithoutLaptopNestedInput;
    it?: itUpdateManyWithoutLaptopNestedInput;
    user?: userUpdateOneRequiredWithoutLaptopNestedInput;
  };

  export type laptopUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    serial_number?: StringFieldUpdateOperationsInput | string;
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    warranty_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance?: financeUncheckedUpdateManyWithoutLaptopNestedInput;
    it?: itUncheckedUpdateManyWithoutLaptopNestedInput;
  };

  export type userUpsertWithoutInventoryInput = {
    update: XOR<userUpdateWithoutInventoryInput, userUncheckedUpdateWithoutInventoryInput>;
    create: XOR<userCreateWithoutInventoryInput, userUncheckedCreateWithoutInventoryInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutInventoryInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutInventoryInput, userUncheckedUpdateWithoutInventoryInput>;
  };

  export type userUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    finance?: financeUpdateManyWithoutUserNestedInput;
    it?: itUpdateManyWithoutUserNestedInput;
    laptop?: laptopUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    finance?: financeUncheckedUpdateManyWithoutUserNestedInput;
    it?: itUncheckedUpdateManyWithoutUserNestedInput;
    laptop?: laptopUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type laptopCreateWithoutItInput = {
    id?: string;
    brand: string;
    model: string;
    serial_number: string;
    purchase_date: Date | string;
    warranty_expiry_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance?: financeCreateNestedManyWithoutLaptopInput;
    inventory?: inventoryCreateNestedManyWithoutLaptopInput;
    user: userCreateNestedOneWithoutLaptopInput;
  };

  export type laptopUncheckedCreateWithoutItInput = {
    id?: string;
    brand: string;
    model: string;
    serial_number: string;
    purchase_date: Date | string;
    warranty_expiry_date?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance?: financeUncheckedCreateNestedManyWithoutLaptopInput;
    inventory?: inventoryUncheckedCreateNestedManyWithoutLaptopInput;
  };

  export type laptopCreateOrConnectWithoutItInput = {
    where: laptopWhereUniqueInput;
    create: XOR<laptopCreateWithoutItInput, laptopUncheckedCreateWithoutItInput>;
  };

  export type userCreateWithoutItInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    finance?: financeCreateNestedManyWithoutUserInput;
    inventory?: inventoryCreateNestedManyWithoutUserInput;
    laptop?: laptopCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutItInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    finance?: financeUncheckedCreateNestedManyWithoutUserInput;
    inventory?: inventoryUncheckedCreateNestedManyWithoutUserInput;
    laptop?: laptopUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutItInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutItInput, userUncheckedCreateWithoutItInput>;
  };

  export type laptopUpsertWithoutItInput = {
    update: XOR<laptopUpdateWithoutItInput, laptopUncheckedUpdateWithoutItInput>;
    create: XOR<laptopCreateWithoutItInput, laptopUncheckedCreateWithoutItInput>;
    where?: laptopWhereInput;
  };

  export type laptopUpdateToOneWithWhereWithoutItInput = {
    where?: laptopWhereInput;
    data: XOR<laptopUpdateWithoutItInput, laptopUncheckedUpdateWithoutItInput>;
  };

  export type laptopUpdateWithoutItInput = {
    id?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    serial_number?: StringFieldUpdateOperationsInput | string;
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    warranty_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance?: financeUpdateManyWithoutLaptopNestedInput;
    inventory?: inventoryUpdateManyWithoutLaptopNestedInput;
    user?: userUpdateOneRequiredWithoutLaptopNestedInput;
  };

  export type laptopUncheckedUpdateWithoutItInput = {
    id?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    serial_number?: StringFieldUpdateOperationsInput | string;
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    warranty_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance?: financeUncheckedUpdateManyWithoutLaptopNestedInput;
    inventory?: inventoryUncheckedUpdateManyWithoutLaptopNestedInput;
  };

  export type userUpsertWithoutItInput = {
    update: XOR<userUpdateWithoutItInput, userUncheckedUpdateWithoutItInput>;
    create: XOR<userCreateWithoutItInput, userUncheckedCreateWithoutItInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutItInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutItInput, userUncheckedUpdateWithoutItInput>;
  };

  export type userUpdateWithoutItInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    finance?: financeUpdateManyWithoutUserNestedInput;
    inventory?: inventoryUpdateManyWithoutUserNestedInput;
    laptop?: laptopUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutItInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    finance?: financeUncheckedUpdateManyWithoutUserNestedInput;
    inventory?: inventoryUncheckedUpdateManyWithoutUserNestedInput;
    laptop?: laptopUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type financeCreateWithoutLaptopInput = {
    id?: string;
    purchase_price: number;
    depreciation_value: number;
    current_value: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutFinanceInput;
  };

  export type financeUncheckedCreateWithoutLaptopInput = {
    id?: string;
    purchase_price: number;
    depreciation_value: number;
    current_value: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type financeCreateOrConnectWithoutLaptopInput = {
    where: financeWhereUniqueInput;
    create: XOR<financeCreateWithoutLaptopInput, financeUncheckedCreateWithoutLaptopInput>;
  };

  export type financeCreateManyLaptopInputEnvelope = {
    data: financeCreateManyLaptopInput | financeCreateManyLaptopInput[];
    skipDuplicates?: boolean;
  };

  export type inventoryCreateWithoutLaptopInput = {
    id?: string;
    quantity: number;
    location: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutInventoryInput;
  };

  export type inventoryUncheckedCreateWithoutLaptopInput = {
    id?: string;
    quantity: number;
    location: string;
    status: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type inventoryCreateOrConnectWithoutLaptopInput = {
    where: inventoryWhereUniqueInput;
    create: XOR<inventoryCreateWithoutLaptopInput, inventoryUncheckedCreateWithoutLaptopInput>;
  };

  export type inventoryCreateManyLaptopInputEnvelope = {
    data: inventoryCreateManyLaptopInput | inventoryCreateManyLaptopInput[];
    skipDuplicates?: boolean;
  };

  export type itCreateWithoutLaptopInput = {
    id?: string;
    maintenance_date: Date | string;
    maintenance_notes: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutItInput;
  };

  export type itUncheckedCreateWithoutLaptopInput = {
    id?: string;
    maintenance_date: Date | string;
    maintenance_notes: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type itCreateOrConnectWithoutLaptopInput = {
    where: itWhereUniqueInput;
    create: XOR<itCreateWithoutLaptopInput, itUncheckedCreateWithoutLaptopInput>;
  };

  export type itCreateManyLaptopInputEnvelope = {
    data: itCreateManyLaptopInput | itCreateManyLaptopInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutLaptopInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    finance?: financeCreateNestedManyWithoutUserInput;
    inventory?: inventoryCreateNestedManyWithoutUserInput;
    it?: itCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutLaptopInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    finance?: financeUncheckedCreateNestedManyWithoutUserInput;
    inventory?: inventoryUncheckedCreateNestedManyWithoutUserInput;
    it?: itUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutLaptopInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutLaptopInput, userUncheckedCreateWithoutLaptopInput>;
  };

  export type financeUpsertWithWhereUniqueWithoutLaptopInput = {
    where: financeWhereUniqueInput;
    update: XOR<financeUpdateWithoutLaptopInput, financeUncheckedUpdateWithoutLaptopInput>;
    create: XOR<financeCreateWithoutLaptopInput, financeUncheckedCreateWithoutLaptopInput>;
  };

  export type financeUpdateWithWhereUniqueWithoutLaptopInput = {
    where: financeWhereUniqueInput;
    data: XOR<financeUpdateWithoutLaptopInput, financeUncheckedUpdateWithoutLaptopInput>;
  };

  export type financeUpdateManyWithWhereWithoutLaptopInput = {
    where: financeScalarWhereInput;
    data: XOR<financeUpdateManyMutationInput, financeUncheckedUpdateManyWithoutLaptopInput>;
  };

  export type financeScalarWhereInput = {
    AND?: financeScalarWhereInput | financeScalarWhereInput[];
    OR?: financeScalarWhereInput[];
    NOT?: financeScalarWhereInput | financeScalarWhereInput[];
    id?: UuidFilter<'finance'> | string;
    laptop_id?: UuidFilter<'finance'> | string;
    purchase_price?: IntFilter<'finance'> | number;
    depreciation_value?: IntFilter<'finance'> | number;
    current_value?: IntFilter<'finance'> | number;
    user_id?: UuidFilter<'finance'> | string;
    created_at?: DateTimeFilter<'finance'> | Date | string;
    updated_at?: DateTimeFilter<'finance'> | Date | string;
  };

  export type inventoryUpsertWithWhereUniqueWithoutLaptopInput = {
    where: inventoryWhereUniqueInput;
    update: XOR<inventoryUpdateWithoutLaptopInput, inventoryUncheckedUpdateWithoutLaptopInput>;
    create: XOR<inventoryCreateWithoutLaptopInput, inventoryUncheckedCreateWithoutLaptopInput>;
  };

  export type inventoryUpdateWithWhereUniqueWithoutLaptopInput = {
    where: inventoryWhereUniqueInput;
    data: XOR<inventoryUpdateWithoutLaptopInput, inventoryUncheckedUpdateWithoutLaptopInput>;
  };

  export type inventoryUpdateManyWithWhereWithoutLaptopInput = {
    where: inventoryScalarWhereInput;
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyWithoutLaptopInput>;
  };

  export type inventoryScalarWhereInput = {
    AND?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
    OR?: inventoryScalarWhereInput[];
    NOT?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
    id?: UuidFilter<'inventory'> | string;
    laptop_id?: UuidFilter<'inventory'> | string;
    quantity?: IntFilter<'inventory'> | number;
    location?: StringFilter<'inventory'> | string;
    status?: StringFilter<'inventory'> | string;
    user_id?: UuidFilter<'inventory'> | string;
    created_at?: DateTimeFilter<'inventory'> | Date | string;
    updated_at?: DateTimeFilter<'inventory'> | Date | string;
  };

  export type itUpsertWithWhereUniqueWithoutLaptopInput = {
    where: itWhereUniqueInput;
    update: XOR<itUpdateWithoutLaptopInput, itUncheckedUpdateWithoutLaptopInput>;
    create: XOR<itCreateWithoutLaptopInput, itUncheckedCreateWithoutLaptopInput>;
  };

  export type itUpdateWithWhereUniqueWithoutLaptopInput = {
    where: itWhereUniqueInput;
    data: XOR<itUpdateWithoutLaptopInput, itUncheckedUpdateWithoutLaptopInput>;
  };

  export type itUpdateManyWithWhereWithoutLaptopInput = {
    where: itScalarWhereInput;
    data: XOR<itUpdateManyMutationInput, itUncheckedUpdateManyWithoutLaptopInput>;
  };

  export type itScalarWhereInput = {
    AND?: itScalarWhereInput | itScalarWhereInput[];
    OR?: itScalarWhereInput[];
    NOT?: itScalarWhereInput | itScalarWhereInput[];
    id?: UuidFilter<'it'> | string;
    laptop_id?: UuidFilter<'it'> | string;
    maintenance_date?: DateTimeFilter<'it'> | Date | string;
    maintenance_notes?: StringFilter<'it'> | string;
    user_id?: UuidFilter<'it'> | string;
    created_at?: DateTimeFilter<'it'> | Date | string;
    updated_at?: DateTimeFilter<'it'> | Date | string;
  };

  export type userUpsertWithoutLaptopInput = {
    update: XOR<userUpdateWithoutLaptopInput, userUncheckedUpdateWithoutLaptopInput>;
    create: XOR<userCreateWithoutLaptopInput, userUncheckedCreateWithoutLaptopInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutLaptopInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutLaptopInput, userUncheckedUpdateWithoutLaptopInput>;
  };

  export type userUpdateWithoutLaptopInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    finance?: financeUpdateManyWithoutUserNestedInput;
    inventory?: inventoryUpdateManyWithoutUserNestedInput;
    it?: itUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutLaptopInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    finance?: financeUncheckedUpdateManyWithoutUserNestedInput;
    inventory?: inventoryUncheckedUpdateManyWithoutUserNestedInput;
    it?: itUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyCreateManyUserInputEnvelope = {
    data: companyCreateManyUserInput | companyCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type financeCreateWithoutUserInput = {
    id?: string;
    purchase_price: number;
    depreciation_value: number;
    current_value: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    laptop: laptopCreateNestedOneWithoutFinanceInput;
  };

  export type financeUncheckedCreateWithoutUserInput = {
    id?: string;
    laptop_id: string;
    purchase_price: number;
    depreciation_value: number;
    current_value: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type financeCreateOrConnectWithoutUserInput = {
    where: financeWhereUniqueInput;
    create: XOR<financeCreateWithoutUserInput, financeUncheckedCreateWithoutUserInput>;
  };

  export type financeCreateManyUserInputEnvelope = {
    data: financeCreateManyUserInput | financeCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type inventoryCreateWithoutUserInput = {
    id?: string;
    quantity: number;
    location: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    laptop: laptopCreateNestedOneWithoutInventoryInput;
  };

  export type inventoryUncheckedCreateWithoutUserInput = {
    id?: string;
    laptop_id: string;
    quantity: number;
    location: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type inventoryCreateOrConnectWithoutUserInput = {
    where: inventoryWhereUniqueInput;
    create: XOR<inventoryCreateWithoutUserInput, inventoryUncheckedCreateWithoutUserInput>;
  };

  export type inventoryCreateManyUserInputEnvelope = {
    data: inventoryCreateManyUserInput | inventoryCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type itCreateWithoutUserInput = {
    id?: string;
    maintenance_date: Date | string;
    maintenance_notes: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    laptop: laptopCreateNestedOneWithoutItInput;
  };

  export type itUncheckedCreateWithoutUserInput = {
    id?: string;
    laptop_id: string;
    maintenance_date: Date | string;
    maintenance_notes: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type itCreateOrConnectWithoutUserInput = {
    where: itWhereUniqueInput;
    create: XOR<itCreateWithoutUserInput, itUncheckedCreateWithoutUserInput>;
  };

  export type itCreateManyUserInputEnvelope = {
    data: itCreateManyUserInput | itCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type laptopCreateWithoutUserInput = {
    id?: string;
    brand: string;
    model: string;
    serial_number: string;
    purchase_date: Date | string;
    warranty_expiry_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance?: financeCreateNestedManyWithoutLaptopInput;
    inventory?: inventoryCreateNestedManyWithoutLaptopInput;
    it?: itCreateNestedManyWithoutLaptopInput;
  };

  export type laptopUncheckedCreateWithoutUserInput = {
    id?: string;
    brand: string;
    model: string;
    serial_number: string;
    purchase_date: Date | string;
    warranty_expiry_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance?: financeUncheckedCreateNestedManyWithoutLaptopInput;
    inventory?: inventoryUncheckedCreateNestedManyWithoutLaptopInput;
    it?: itUncheckedCreateNestedManyWithoutLaptopInput;
  };

  export type laptopCreateOrConnectWithoutUserInput = {
    where: laptopWhereUniqueInput;
    create: XOR<laptopCreateWithoutUserInput, laptopUncheckedCreateWithoutUserInput>;
  };

  export type laptopCreateManyUserInputEnvelope = {
    data: laptopCreateManyUserInput | laptopCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type companyUpsertWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyUpdateWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateManyWithWhereWithoutUserInput = {
    where: companyScalarWhereInput;
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyScalarWhereInput = {
    AND?: companyScalarWhereInput | companyScalarWhereInput[];
    OR?: companyScalarWhereInput[];
    NOT?: companyScalarWhereInput | companyScalarWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
  };

  export type financeUpsertWithWhereUniqueWithoutUserInput = {
    where: financeWhereUniqueInput;
    update: XOR<financeUpdateWithoutUserInput, financeUncheckedUpdateWithoutUserInput>;
    create: XOR<financeCreateWithoutUserInput, financeUncheckedCreateWithoutUserInput>;
  };

  export type financeUpdateWithWhereUniqueWithoutUserInput = {
    where: financeWhereUniqueInput;
    data: XOR<financeUpdateWithoutUserInput, financeUncheckedUpdateWithoutUserInput>;
  };

  export type financeUpdateManyWithWhereWithoutUserInput = {
    where: financeScalarWhereInput;
    data: XOR<financeUpdateManyMutationInput, financeUncheckedUpdateManyWithoutUserInput>;
  };

  export type inventoryUpsertWithWhereUniqueWithoutUserInput = {
    where: inventoryWhereUniqueInput;
    update: XOR<inventoryUpdateWithoutUserInput, inventoryUncheckedUpdateWithoutUserInput>;
    create: XOR<inventoryCreateWithoutUserInput, inventoryUncheckedCreateWithoutUserInput>;
  };

  export type inventoryUpdateWithWhereUniqueWithoutUserInput = {
    where: inventoryWhereUniqueInput;
    data: XOR<inventoryUpdateWithoutUserInput, inventoryUncheckedUpdateWithoutUserInput>;
  };

  export type inventoryUpdateManyWithWhereWithoutUserInput = {
    where: inventoryScalarWhereInput;
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyWithoutUserInput>;
  };

  export type itUpsertWithWhereUniqueWithoutUserInput = {
    where: itWhereUniqueInput;
    update: XOR<itUpdateWithoutUserInput, itUncheckedUpdateWithoutUserInput>;
    create: XOR<itCreateWithoutUserInput, itUncheckedCreateWithoutUserInput>;
  };

  export type itUpdateWithWhereUniqueWithoutUserInput = {
    where: itWhereUniqueInput;
    data: XOR<itUpdateWithoutUserInput, itUncheckedUpdateWithoutUserInput>;
  };

  export type itUpdateManyWithWhereWithoutUserInput = {
    where: itScalarWhereInput;
    data: XOR<itUpdateManyMutationInput, itUncheckedUpdateManyWithoutUserInput>;
  };

  export type laptopUpsertWithWhereUniqueWithoutUserInput = {
    where: laptopWhereUniqueInput;
    update: XOR<laptopUpdateWithoutUserInput, laptopUncheckedUpdateWithoutUserInput>;
    create: XOR<laptopCreateWithoutUserInput, laptopUncheckedCreateWithoutUserInput>;
  };

  export type laptopUpdateWithWhereUniqueWithoutUserInput = {
    where: laptopWhereUniqueInput;
    data: XOR<laptopUpdateWithoutUserInput, laptopUncheckedUpdateWithoutUserInput>;
  };

  export type laptopUpdateManyWithWhereWithoutUserInput = {
    where: laptopScalarWhereInput;
    data: XOR<laptopUpdateManyMutationInput, laptopUncheckedUpdateManyWithoutUserInput>;
  };

  export type laptopScalarWhereInput = {
    AND?: laptopScalarWhereInput | laptopScalarWhereInput[];
    OR?: laptopScalarWhereInput[];
    NOT?: laptopScalarWhereInput | laptopScalarWhereInput[];
    id?: UuidFilter<'laptop'> | string;
    brand?: StringFilter<'laptop'> | string;
    model?: StringFilter<'laptop'> | string;
    serial_number?: StringFilter<'laptop'> | string;
    purchase_date?: DateTimeFilter<'laptop'> | Date | string;
    warranty_expiry_date?: DateTimeNullableFilter<'laptop'> | Date | string | null;
    user_id?: UuidFilter<'laptop'> | string;
    created_at?: DateTimeFilter<'laptop'> | Date | string;
    updated_at?: DateTimeFilter<'laptop'> | Date | string;
  };

  export type financeCreateManyLaptopInput = {
    id?: string;
    purchase_price: number;
    depreciation_value: number;
    current_value: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type inventoryCreateManyLaptopInput = {
    id?: string;
    quantity: number;
    location: string;
    status: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type itCreateManyLaptopInput = {
    id?: string;
    maintenance_date: Date | string;
    maintenance_notes: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type financeUpdateWithoutLaptopInput = {
    id?: StringFieldUpdateOperationsInput | string;
    purchase_price?: IntFieldUpdateOperationsInput | number;
    depreciation_value?: IntFieldUpdateOperationsInput | number;
    current_value?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutFinanceNestedInput;
  };

  export type financeUncheckedUpdateWithoutLaptopInput = {
    id?: StringFieldUpdateOperationsInput | string;
    purchase_price?: IntFieldUpdateOperationsInput | number;
    depreciation_value?: IntFieldUpdateOperationsInput | number;
    current_value?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type financeUncheckedUpdateManyWithoutLaptopInput = {
    id?: StringFieldUpdateOperationsInput | string;
    purchase_price?: IntFieldUpdateOperationsInput | number;
    depreciation_value?: IntFieldUpdateOperationsInput | number;
    current_value?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type inventoryUpdateWithoutLaptopInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    location?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutInventoryNestedInput;
  };

  export type inventoryUncheckedUpdateWithoutLaptopInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    location?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type inventoryUncheckedUpdateManyWithoutLaptopInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    location?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type itUpdateWithoutLaptopInput = {
    id?: StringFieldUpdateOperationsInput | string;
    maintenance_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    maintenance_notes?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutItNestedInput;
  };

  export type itUncheckedUpdateWithoutLaptopInput = {
    id?: StringFieldUpdateOperationsInput | string;
    maintenance_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    maintenance_notes?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type itUncheckedUpdateManyWithoutLaptopInput = {
    id?: StringFieldUpdateOperationsInput | string;
    maintenance_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    maintenance_notes?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateManyUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type financeCreateManyUserInput = {
    id?: string;
    laptop_id: string;
    purchase_price: number;
    depreciation_value: number;
    current_value: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type inventoryCreateManyUserInput = {
    id?: string;
    laptop_id: string;
    quantity: number;
    location: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type itCreateManyUserInput = {
    id?: string;
    laptop_id: string;
    maintenance_date: Date | string;
    maintenance_notes: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type laptopCreateManyUserInput = {
    id?: string;
    brand: string;
    model: string;
    serial_number: string;
    purchase_date: Date | string;
    warranty_expiry_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type financeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    purchase_price?: IntFieldUpdateOperationsInput | number;
    depreciation_value?: IntFieldUpdateOperationsInput | number;
    current_value?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    laptop?: laptopUpdateOneRequiredWithoutFinanceNestedInput;
  };

  export type financeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    laptop_id?: StringFieldUpdateOperationsInput | string;
    purchase_price?: IntFieldUpdateOperationsInput | number;
    depreciation_value?: IntFieldUpdateOperationsInput | number;
    current_value?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type financeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    laptop_id?: StringFieldUpdateOperationsInput | string;
    purchase_price?: IntFieldUpdateOperationsInput | number;
    depreciation_value?: IntFieldUpdateOperationsInput | number;
    current_value?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type inventoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    location?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    laptop?: laptopUpdateOneRequiredWithoutInventoryNestedInput;
  };

  export type inventoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    laptop_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    location?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type inventoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    laptop_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    location?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type itUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    maintenance_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    maintenance_notes?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    laptop?: laptopUpdateOneRequiredWithoutItNestedInput;
  };

  export type itUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    laptop_id?: StringFieldUpdateOperationsInput | string;
    maintenance_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    maintenance_notes?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type itUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    laptop_id?: StringFieldUpdateOperationsInput | string;
    maintenance_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    maintenance_notes?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type laptopUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    serial_number?: StringFieldUpdateOperationsInput | string;
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    warranty_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance?: financeUpdateManyWithoutLaptopNestedInput;
    inventory?: inventoryUpdateManyWithoutLaptopNestedInput;
    it?: itUpdateManyWithoutLaptopNestedInput;
  };

  export type laptopUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    serial_number?: StringFieldUpdateOperationsInput | string;
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    warranty_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance?: financeUncheckedUpdateManyWithoutLaptopNestedInput;
    inventory?: inventoryUncheckedUpdateManyWithoutLaptopNestedInput;
    it?: itUncheckedUpdateManyWithoutLaptopNestedInput;
  };

  export type laptopUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    brand?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    serial_number?: StringFieldUpdateOperationsInput | string;
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    warranty_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use LaptopCountOutputTypeDefaultArgs instead
   */
  export type LaptopCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    LaptopCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use financeDefaultArgs instead
   */
  export type financeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    financeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use inventoryDefaultArgs instead
   */
  export type inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    inventoryDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use itDefaultArgs instead
   */
  export type itArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = itDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use laptopDefaultArgs instead
   */
  export type laptopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    laptopDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
