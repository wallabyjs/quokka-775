import { connect } from "@/database";

export function run() {
  return connect("second");
}
