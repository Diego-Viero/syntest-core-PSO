/*
 * Copyright 2020-2023 Delft University of Technology and SynTest contributors
 *
 * This file is part of SynTest Framework - SynTest Core.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { RootContext } from "@syntest/analysis";

import { Encoding } from "../../lib/Encoding";
import { ObjectiveFunction } from "../../lib/objective/ObjectiveFunction";
import { SearchSubject } from "../../lib/SearchSubject";

export class DummySearchSubject<T extends Encoding> extends SearchSubject<T> {
  protected objectives: ObjectiveFunction<T>[];

  constructor(objectives: ObjectiveFunction<T>[]) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    super(
      { path: "", name: "", subTargets: [] },
      new RootContext<unknown>(
        "",
        undefined,
        undefined,
        undefined,
        undefined,
        undefined
      )
    );
    this.objectives = objectives;
  }

  override getObjectives(): ObjectiveFunction<T>[] {
    return this.objectives;
  }

  protected _extractObjectives(): void {
    return;
  }

  protected _extractPaths(): void {
    // mock
  }
}
